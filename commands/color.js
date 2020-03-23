const { MessageEmbed } = require('discord.js');
const PlayerController = require('../controllers/PlayerController');

module.exports = {
  name: 'color',
  guildOnly: false,
  description: 'Change embed color',
  async execute(msg, args) {
    const color = args[0];

    if (!color) msg.reply('Anna väri hexadesimaalina. Esimerkki `#1e90ff`');

    let player = await PlayerController.getPlayer(msg.author.id);
    if (!player) player = await PlayerController.createPlayer(msg.author.id);
    player.color = color;

    await player.save();

    msg.reply(`Värisi vaihdettu \`${color}\``);
  }
}