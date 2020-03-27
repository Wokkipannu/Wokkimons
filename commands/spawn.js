/**
 * Command Spawn
 * 
 * Force spawn a monster to the current channel or a specific guild and channel
 * when sending a message directly to the bot. Spawning is currently restricted
 * to only one user.
 */

const { MessageEmbed } = require('discord.js');
const Monsters = require('../utils/monsters');
const MonController = require('../controllers/MonController');

module.exports = {
  name: 'spawn',
  description: 'Force spawn a monster',
  guildOnly: false,
  async execute(msg, args) {
    // If user is not Wokki#0001
    if (msg.author.id !== '108299947257925632') return;

    // Arguments
    const name = args[0];
    const isShiny = args[1];
    const guildId = args[2];
    const channelId = args[3];

    // If our channel is not a text channel (likely a dm), we'll check if
    // we have guildId and channelId arguments defined
    if (msg.channel.type !== 'text' && !guildId && !channelId) {
      return msg.reply('Spawnataksesi DM kautta monsterin, syötä myös kanavan ID `spawn <name> <shiny> <guild id> <channel id>`');
    }

    // Find the monster object from array with the given name argument
    // Give the monster object isShiny value 0 or 1 depending on isShiny argument
    // Randomize a level using the Monsters modules getLevel() function, randomizes between 0-99
    const monsters = await MonController.getAllMons();
    let monster = monsters.find(mon => mon.name.replace(" ", "").toLowerCase() === name.toLowerCase());
    if (!monster) return msg.reply('Viallinen nimi');
    monster.isShiny = isShiny ? 1 : 0;
    monster.level = Monsters.getLevel();

    // If we received the message via DM
    if (msg.channel.type !== 'text') {
      if (!guildId) return msg.reply('Guild ID puuttuu');
      if (!channelId) return msg.reply('Channel ID puuttuu');

      const guild = msg.client.guilds.cache.find(g => g.id === guildId);
      if (!guild) return msg.reply('Antamasi guild id on viallinen tai botti ei ole liittynyt sinne');
      const channel = guild.channels.cache.find(c => c.id === channelId);
      if (!channel) return msg.reply('Antamasi channel id on viallinen tai botilla ei ole oikeuksia sinne');

      msg.client.currentMonster.set(guildId, monster);

      const embed = new MessageEmbed()
        .setTitle(`Villi ${monster.isShiny ? '⭐ monsteri' : 'monsteri'} ilmestyi!`)
        .setDescription(`Nappaa se kirjoittamalla w!catch <nimi>`)
        .setImage(isShiny ? monster.shinyImage : monster.image);

      channel.send(embed);
    }
    // Else we received the message via a text channel
    else {
      msg.client.currentMonster.set(msg.guild.id, monster);

      const embed = new MessageEmbed()
        .setTitle(`Villi ${monster.isShiny ? '⭐ monsteri' : 'monsteri'} ilmestyi!`)
        .setDescription(`Nappaa se kirjoittamalla w!catch <nimi>`)
        .setImage(isShiny ? monster.shinyImage : monster.image);
    
      msg.channel.send(embed);
    }
  }
}