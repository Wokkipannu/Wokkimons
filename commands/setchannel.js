/**
 * Command Setchannel
 * 
 * Sets the monster spawn channel for the current guild
 * A spawn channel is required for the bot to function properly
 */

const ServerController = require('../controllers/ServerController');
const dispatcher = require('../utils/dispatcher');
const spawner = require('../base/spawner');
const Dispatcher = new dispatcher();

module.exports = {
  name: 'setchannel',
  usage: '<#kanava>',
  guildOnly: true,
  description: 'Set monster spawn channel',
  async execute(msg, args) {
    // Make sure that the user has the MANAGE_CHANNELS permission
    if (!msg.member.permissions.has('MANAGE_CHANNELS')) return msg.reply('Sinulta puuttuu MANAGE_CHANNELS oikeus');
    // Get the channe from the mentions
    const channel = msg.mentions.channels.first();
    if (!channel) return msg.reply(`Oikea muoto \`setchannel ${usage}\``);
    // Find or create the server and define the spawnChannel id
    let server = await ServerController.getServer(msg.guild.id);
    if (!server) server = await ServerController.createServer(msg.guild.id);
    server.spawnChannel = channel.id;
    // Save the server
    await server.save();
    // Assign the spawner and start it
    let sp = msg.client.spawners.get(msg.guild.id);
    if (sp) sp.stop();
    const Spawner = new spawner(Dispatcher, msg.guild.id, channel.id);
    Spawner.start();
    msg.client.spawners.set(msg.guild.id, Spawner);
    server.spawnerStatus = 1;
    server.save();

    msg.reply(`Monsterien spawn kanava vaihdettu ${channel.name}`);
  }
}