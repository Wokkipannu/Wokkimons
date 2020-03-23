const ServerController = require('../controllers/ServerController');
const spawner = require('../base/spawner');
const dispatcher = require('../utils/dispatcher');
const Dispatcher = new dispatcher();

module.exports = {
  name: 'start',
  description: 'Start spawner',
  guildOnly: true,
  async execute(msg, args) {
    if (!msg.member.permissions.has('MANAGE_CHANNELS')) return msg.reply('Sinulta puuttuu MANAGE_CHANNELS oikeus');

    let spawner = msg.client.spawners.get(msg.guild.id);

    if (!spawner) {
      let server = await ServerController.getServer(msg.guild.id);
      if (!server || !server.spawnChannel) return msg.reply('Sinun tulee asettaa spawn kanava ensin käyttämällä `setchannel` komentoa');

      const Spawner = new spawner(Dispatcher, server.serverId, server.spawnChannel);
      Spawner.start();
      msg.client.spawners.set(msg.guild.id, Spawner);
      msg.reply('Spawner käynnistetty');
    }

    if (spawner.getStatus()) return msg.reply('Spawner on jo päällä');
    else {
      spawner.start();
      msg.reply('Spawner käynnistetty');
    }
  }
}