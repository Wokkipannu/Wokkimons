/**
 * Command Stop
 * 
 * Stop the spawner from spawning monsters
 */

const Command = require('../base/command');
const ServerController = require('../controllers/ServerController');

module.exports = class StopCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'stop',
      guildOnly: true,
      description: 'Keskeyttää monster spawner ajastimen',
      extendedDescription: 'Keskeyttää monster spawner ajastimen. Ajastin on mahdollista jatkaa käyttämällä start komentoa.',
      permissions: 'owner'
    })
  }

  async execute(msg, args) {
    // If the user does not have the MANAGE_CHANNELS permission
    if (!msg.member.permissions.has('MANAGE_CHANNELS')) return msg.reply('Sinulta puuttuu MANAGE_CHANNELS oikeus');
    // Get the spawner from spawners collection
    let spawner = this.client.spawners.get(msg.guild.id);
    // Find the server from our database
    let server = await ServerController.getServer(msg.guild.id);
    // If we didn't find a spawner
    if (!spawner) {
      return msg.reply('Spawner ei ole päällä tai sitä ei ole olemassa. Käytä `start` komentoa.');
    }
    // If we found a spawner, but it's already off we'll send a message
    // Otherwise we'll stop it
    if (!spawner.getStatus()) return msg.reply('Spawner on jo pois päältä');
    else {
      spawner.stop();
      server.spawnerStatus = 0;
      server.save();
      msg.reply('Spawner otettiin pois päältä');
    }
  }
}