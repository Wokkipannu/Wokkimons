/**
 * Command Setchannel
 * 
 * Sets the monster spawn channel for the current guild
 * A spawn channel is required for the bot to function properly
 */

const Command = require('../base/command');
const ServerController = require('../controllers/ServerController');
const spawner = require('../base/spawner');

module.exports = class SetChannelCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'setchannel',
      guildOnly: true,
      description: 'Vaihda monsterin spawni kanava',
      extendedDescription: 'Määrittää monstereille spawni kanavan ja aloittaa spawner ajastimen',
      usage: '<#kanava>'
    })
  }

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
    // Find if we have a spawner running
    // If we do, stop it and set it to null
    let sp = this.client.spawners.get(msg.guild.id);
    if (sp) {
      sp.stop()
      sp = null;
    };
    // Assign the spawner and start it
    const Spawner = new spawner(this.client.Dispatcher, msg.guild.id, channel.id);
    Spawner.start();
    this.client.spawners.set(msg.guild.id, Spawner);
    server.spawnerStatus = 1;
    server.save();

    msg.reply(`Monsterien spawn kanava vaihdettu ${channel.name}`);
  }
}