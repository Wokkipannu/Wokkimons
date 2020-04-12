/**
 * Command Spawn
 * 
 * Force spawn a monster to the current channel or a specific guild and channel
 * when sending a message directly to the bot. Spawning is currently restricted
 * to only one user.
 */

const Command = require('../base/command');
const Utils = require('../utils/utils');
const MonController = require('../controllers/MonController');

module.exports = class SpawnCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'spawn',
      guildOnly: true,
      description: 'Spawnaa kanavalle monsterin',
      extendedDescription: 'Spawnaa kanavalle halutun monsterin. Monsterille määriytyy taso satunnaisesti. Shiny status on mahdollista määrittää.',
      permissions: 'owner',
      usage: '<monsterin nimi> <taso> <shiny true/false> <serverin id> <kanavan id>'
    });
  }

  async execute(msg, args) {
    // Get the spawner 
    const spawner = this.client.spawners.get(msg.guild.id);
    if (!spawner) return msg.reply('Serverille tulee määrittää spawni kanava ennen komennon käyttämistä');

    // Arguments
    const name = args[0];
    const level = args[1] || Utils.getLevel();
    const shiny = args[2] || spawner.rollShiny();
    const guildId = args[3] || msg.guild.id;
    const channelId = args[4] || msg.channel.id;

    if (!name) return 'Oikea muoto `spawn <name>`';

    // If our channel is not a text channel (likely a dm), we'll check if
    // we have guildId and channelId arguments defined
    if (msg.channel.type !== 'text' && !guildId && !channelId) {
      return msg.reply('Spawnataksesi DM kautta monsterin, syötä myös kanavan ID `spawn <name> <shiny> <guild id> <channel id>`');
    }

    // Find the monster object from array with the given name argument
    // Give the monster object isShiny value 0 or 1 depending on isShiny argument
    // Randomize a level using the Utils modules getLevel() function, randomizes between 0-99
    const monsters = await MonController.getAllMons();
    let monster = monsters.find(mon => mon.name.replace(" ", "").toLowerCase() === name.toLowerCase());
    if (!monster) return msg.reply('Viallinen nimi');
    monster.isShiny = shiny;
    monster.level = level;

    // If we received the message via DM
    if (msg.channel.type !== 'text') {
      const guild = this.client.guilds.cache.find(g => g.id === guildId);
      if (!guild) return msg.reply('Antamasi guild id on viallinen tai botti ei ole liittynyt sinne');
      const channel = guild.channels.cache.find(c => c.id === channelId);
      if (!channel) return msg.reply('Antamasi channel id on viallinen tai botilla ei ole oikeuksia sinne');

      spawner.dispatcher.dispatch('spawn', { monster: monster, serverId: guildId, channelId: channelId });
      return msg.reply(`Monsteri spawnattu serverille ${guild.name} kanavalle ${chanenl.name}`);
    }
    // Else we received the message via a text channel
    else {
      spawner.dispatcher.dispatch('spawn', { monster: monster, serverId: guildId, channelId: channelId });
    }

    return undefined;
  }
}