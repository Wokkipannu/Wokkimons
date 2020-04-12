/**
 * Command Color
 * 
 * Allows user to define a custom color that will be used
 * in their embeds
 */

const Command = require('../base/command');
const PlayerController = require('../controllers/PlayerController');

module.exports = class ColorCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'color',
      guildOnly: true,
      description: 'Vaihda embedien väri',
      extendedDescription: 'Omavalintainen väri komentoihin jotka lähettävät embedin',
      usage: '<hex värikoodi>'
    });
  }

  async execute(msg, args) {
    // Define color argument
    const color = args[0];

    // If we don't have a color, send a message
    if (!color) msg.reply('Anna väri hexadesimaalina. Esimerkki `#1e90ff`');

    // Find or create the player from database
    // Define the new color value to the object
    let player = await PlayerController.getPlayer(msg.author.id);
    if (!player) player = await PlayerController.createPlayer(msg.author.id);
    player.color = color;
    // Save changes
    await player.save();

    msg.reply(`Värisi vaihdettu \`${color}\``);
  }
}