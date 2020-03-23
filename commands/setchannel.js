const ServerController = require('../controllers/ServerController');

module.exports = {
  name: 'setchannel',
  usage: '<#kanava>',
  guildOnly: true,
  description: 'Set monster spawn channel',
  async execute(msg, args) {
    if (!msg.member.permissions.has('MANAGE_CHANNELS')) return msg.reply('Sinulta puuttuu MANAGE_CHANNELS oikeus');

    const channel = msg.mentions.channels.first();
    if (!channel) return msg.reply(`Oikea muoto \`setchannel ${usage}\``);

    let server = await ServerController.getServer(msg.guild.id);
    if (!server) server = await ServerController.createServer(msg.guild.id);
    server.spawnChannel = channel.id;

    await server.save();

    msg.reply(`Monsterien spawn kanava vaihdettu ${channel.name}`);
  }
}