/**
 * Command Mons
 * 
 * Displays a list of monsters that exist in the game and also
 * display users progress on catching them all
 */

const Command = require('../base/command');
const { MessageEmbed } = require('discord.js');
const PlayerController = require('../controllers/PlayerController');
const MonController = require('../controllers/MonController');

module.exports = class MonsCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'mons',
      guildOnly: false,
      description: 'Listaa monsterit ja progressin',
      extendedDescription: 'Näyttää listan kaikista monstereista ja kuinka monta olet napannut mistäkin kategoriasta',
      usage: '<dm : valinnainen>'
    });
  }

  async execute(msg, args) {
    // Find player from the database
    // If we did not find the player, we'll create a fake player object so we can
    // still display the monsters
    let player = await PlayerController.getPlayer(msg.author.id);
    if (!player) player = { userId: msg.author.id, monsters: [] }
    // Use players embed color or default if not defined
    let color = player.color || '#1e90ff';
    let mons = [...player.monsters];
    // Remove duplicates from mons
    mons = mons.filter((mon, index, self) => self.findIndex(m => m.MonId === mon.MonId) === index)
    // Sort the player monsters by their rarity to different rarity groups
    const common = mons.filter(monster => monster.Mon.rarity === 1);
    const uncommon = mons.filter(monster => monster.Mon.rarity === 2);
    const rare = mons.filter(monster => monster.Mon.rarity === 3);
    // Get all monsters and sort them by rarities
    // Then sort each rarity group alphabetically
    const Mons = await MonController.getAllMons();
    const commonMonsters = Mons.filter(m => m.rarity === 1).sort((a, b) => {
      let textA = a.name.toUpperCase();
      let textB = b.name.toUpperCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
    const uncommonMonsters = Mons.filter(m => m.rarity === 2).sort((a, b) => {
      let textA = a.name.toUpperCase();
      let textB = b.name.toUpperCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
    const rareMonsters = Mons.filter(m => m.rarity === 3).sort((a, b) => {
      let textA = a.name.toUpperCase();
      let textB = b.name.toUpperCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
    // Create and send embed
    let embed = new MessageEmbed()
      .setColor(color)
      .setTitle(`${msg.author.username} » Collection`);
      embed.addField(`Common (${common.length}/${commonMonsters.length})`, commonMonsters.map(mon => `${mon.name} ${player.monsters.find(monster => monster.MonId === mon.id) ? '✅' : '❌'}`).join('\n'), true)
      embed.addField(`Uncommon (${uncommon.length}/${uncommonMonsters.length})`, uncommonMonsters.map(mon => `${mon.name} ${player.monsters.find(monster => monster.MonId === mon.id) ? '✅' : '❌'}`).join('\n'), true)
      embed.addField(`Rare (${rare.length}/${rareMonsters.length})`, rareMonsters.map(mon => `${mon.name} ${player.monsters.find(monster => monster.MonId === mon.id) ? '✅' : '❌'}`).join('\n'), true);

    if (args[0] === 'dm') {
      msg.author.send(embed);
      msg.delete();
    }
    else {
      msg.channel.send(embed);
    }
  }
}