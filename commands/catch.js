/**
 * Command Catch
 * 
 * Catch a current monster if the name argument matches.
 * Current monster is defined to the guild by spawner or
 * by manually spawning a monster on the guild channel.
 */

const { MessageEmbed } = require('discord.js');
const PlayerController = require('../controllers/PlayerController');
const MonsterController = require('../controllers/MonsterController');
const winston = require('../utils/logger');

module.exports = {
  name: 'catch',
  usage: '<nimi>',
  description: 'Nappaa monsteri',
  guildOnly: true,
  async execute(msg, args) {
    // Join all arguments together so we can use spaces in monster names
    // Fetch the current monster from currentMonster collector
    const name = args.join(' ');
    const currentMonster = msg.client.currentMonster.get(msg.guild.id);

    // User did not define a name for the monster
    if (!name) {
      winston.info(`${msg.author.tag} tried cathing monster without giving a name argument`);
      return msg.reply(`Syötä nimi. Esimerkki catch ${usage}`);
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
      await MonsterController.createMonster({ MonId: currentMonster.id, level: currentMonster.level, isShiny: currentMonster.isShiny, PlayerId: player.id });

      // Log to file
      winston.info(`${msg.author.tag} caught level ${currentMonster.level} ${currentMonster.name} ${currentMonster.isShiny ? '(Shiny)' : ''}`);

      // Send congratulations text and embed to the channel
      const embed = new MessageEmbed()
        .setTitle(currentMonster.isShiny ? `⭐ ${currentMonster.name}` : currentMonster.name)
        .setDescription(`Taso: **${currentMonster.level}**`)
        .setImage(currentMonster.image);

      msg.reply(`Onneksi olkoon! Nappasit tason **${currentMonster.level}** **${currentMonster.isShiny ? `⭐ ${currentMonster.memberName}` : currentMonster.memberName}**!`);
      msg.channel.send(embed);

      msg.client.currentMonster.set(msg.guild.id, '');
    }
    // User tried to catch a monster, but one does not exist
    // Technically this should never be possible
    else {
      winston.info(`${msg.author.tag} tried catch a monster but there is nothing to catch (g:${msg.guild.name} c:${msg.channel.name})`);
      msg.reply('Odota seuraavaa monsteria');
    }
  }
}