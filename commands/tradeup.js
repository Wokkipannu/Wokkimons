/**
 * Command Tradeup
 * 
 * Trade several lower tier monsters to get a random higher tier monster
 * Has a possibility of giving a shiny alternative of the monster
 */

const Command = require('../base/command');
const { MessageEmbed } = require('discord.js');
const Utils = require('../utils/utils');
const PlayerController = require('../controllers/PlayerController');
const MonController = require('../controllers/MonController');
const MonsterController = require('../controllers/MonsterController');

module.exports = class TradeUpCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'tradeup',
      guildOnly: false,
      description: 'Vaihtaa 10 alemman tason monsteria ylemmän tason monsteriksi',
      extendedDescription: 'Ottaa vastaan 10x saman harvinaisuuden monsterin IDtä, poistaa monsterit ja antaa yhden ylemmän tason monsterin. Vaihtaminen ei ole mahdollista rare monstereilla, sillä sitä korkeampaa harvinaisuutta ei ole.',
      usage: '<10x monsterin id>'
    })
  }

  async execute(msg, args) {
    // Fetch the player from database
    // If we don't have a player in the database, we'll send them a message
    let player = await PlayerController.getPlayer(msg.author.id);
    if (!player) return msg.reply('Sinulla ei ole yhtään monsteria!');
    // Get the player embed color or use default if not defined
    let color = player.color || '#1e90ff';
    // Validate the args
    if (args.length < 10 || args.length > 10) return msg.reply('Sinun tulee antaa tasan 10 ID:tä');
    let monsters = [];
    let previous;
    args.forEach(arg => {
      arg = parseInt(arg);
      let mon = player.monsters.find(m => m.id === arg);
      if (mon) {
        if (previous && previous.Mon.name !== mon.Mon.name) return;
        if (previous && previous.id === mon.id) return;
        else monsters.push(mon);
        previous = mon;
      }
    });
    if (monsters.length !== 10) return msg.reply('Varmista, että kaikki antamasi monsterit ovat samoja monstereita');
    // Create the new monster
    let mons = await MonController.getAllMons();
    mons = mons.filter(m => m.rarity === monsters[0].Mon.rarity + 1);
    let mon = mons[Math.floor(Math.random() * mons.length)];
    mon.level = Utils.getLevel();
    mon.isShiny = this.rollShiny();
    // Remove monsters from player
    monsters.forEach(async mon => await MonsterController.deleteMonster(mon.id));
    // Give the new monster to the player
    await MonsterController.createMonster({ MonId: mon.id, level: mon.level, isShiny: mon.isShiny, PlayerId: player.id });
    // Send monster exchange embed
    const embed = new MessageEmbed()
      .setColor(color)
      .setTitle(`${msg.author.username} » Tradeup`)
      .addField('Traded monsters', `${monsters.map(mo => `Tason ${mo.level} ${mo.isShiny ? `⭐ ${mo.Mon.name}` : mo.Mon.name}`).join('\n')}`, true)
      .addField('Received monster', `Tason ${mon.level} ${mon.isShiny ? `⭐ ${mon.name}` : mon.name}`, true);

    msg.channel.send(embed);
  }

  rollShiny() {
    let die = Math.floor(Math.random() * (50 - 1 + 1) + 1);
    if (die === 50) return 1;
    else return 0;
  }
}