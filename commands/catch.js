/**
 * Command Catch
 * 
 * Catch a current monster if the name argument matches.
 * Current monster is defined to the guild by spawner or
 * by manually spawning a monster on the guild channel.
 */

const Command = require('../base/command');
const PlayerController = require('../controllers/PlayerController');
const MonsterController = require('../controllers/MonsterController');
const winston = require('../utils/logger');
const Util = require('../utils/utils');

module.exports = class CatchCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'catch',
      guildOnly: true,
      description: 'Nappaa monsteri',
      extendedDescription: 'Nappaa viimeisin monsteri arvaamalla sen nimi',
      usage: '<nimi>'
    });
  }

  async execute(msg, args) {
    // Join all arguments together so we can use spaces in monster names
    // Fetch the current monster from currentMonster collector
    const name = args.join(' ');
    const currentMonster = this.client.monsters.get(msg.guild.id);

    // User did not define a name for the monster
    if (!name) {
      winston.info(`${msg.author.tag} tried cathing monster without giving a name argument`);
      return msg.reply(`Syötä nimi. Esimerkki catch ${this.usage}`);
    }

    // If we have a monster currently in the guild
    if (currentMonster) {
      // We have a current monster but the user gave a wrong name
      if (name.toLowerCase() !== currentMonster.name.toLowerCase()) {
        winston.info(`${msg.author.tag} tried cathing ${currentMonster.name} with a name ${name}`);
        return msg.reply('Väärä nimi!');
      }

      // Fetch player information from database. If we don't have a user
      // we'll create one with the authors ID
      let player = await PlayerController.getPlayer(msg.author.id);
      if (!player) player = await PlayerController.createPlayer(msg.author.id);

      // Create the monster into the database and define it to the ID of
      // the user that we just found or created
      const newMonster = await MonsterController.createMonster({ MonId: currentMonster.id, level: currentMonster.level, isShiny: currentMonster.isShiny, PlayerId: player.id });
      const monster = await MonsterController.getMonster(newMonster.id);

      // Log to file
      winston.info(`${msg.author.tag} caught level ${currentMonster.level} ${currentMonster.name} ${currentMonster.isShiny ? '(Shiny)' : ''}`);

      msg.channel.send(`Onneksi olkoon, ${msg.author}! Nappasit tason **${monster.level}** **${monster.isShiny ? `⭐ ${monster.Mon.memberName}` : monster.Mon.memberName}**!`, { embed: Util.monsterEmbed(monster, player.color) });

      return this.client.monsters.set(msg.guild.id, '');
    }
    // User tried to catch a monster, but one does not exist
    // Technically this should never be possible
    else {
      winston.info(`${msg.author.tag} tried catch a monster but there is nothing to catch (g:${msg.guild.name} c:${msg.channel.name})`);
      return msg.reply('Odota seuraavaa monsteria');
    }
  }
}