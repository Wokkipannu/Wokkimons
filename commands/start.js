/**
 * Command Start
 * 
 * Start the spawner
 */

const ServerController = require('../controllers/ServerController');
const dispatcher = require('../utils/dispatcher');
const spawner = require('../base/spawner');

module.exports = {
  name: 'start',
  description: 'Start spawner',
  guildOnly: true,
  permissions: 'owner',
  async execute(msg, args) {
    // If the user does not have the MANAGE_CHANNELS permission
    if (!msg.member.permissions.has('MANAGE_CHANNELS')) return msg.reply('Sinulta puuttuu MANAGE_CHANNELS oikeus');
    // Get the spawner from spawners collection
    let sp = msg.client.spawners.get(msg.guild.id);
    // Find the server from our database
    let server = await ServerController.getServer(msg.guild.id);
    // If we didn't find a spawner
    if (!sp) {
      // can not be started before a spawn channel has been defined.
      if (!server || !server.spawnChannel) return msg.reply('Sinun tulee asettaa spawn kanava ensin käyttämällä `setchannel` komentoa');
      // Create a new spawner, start it and assign it to the spawners collection
      const Spawner = new spawner(client.Dispatcher, server.serverId, server.spawnChannel);
      Spawner.init();
      Spawner.start();
      msg.client.spawners.set(msg.guild.id, Spawner);
      server.spawnerStatus = 1;
      server.save();
      return msg.reply('Spawner käynnistetty');
    }
    // If we found a spawner, but it's already on we'll send a message
    // Otherwise we'll start it
    if (sp.getStatus()) return msg.reply('Spawner on jo päällä');
    else {
      sp.start();
      server.spawnerStatus = 1;
      server.save();
      return msg.reply('Spawner käynnistetty');
    }
  }
}