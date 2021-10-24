/**
 * Command Show
 * 
 * Show your monster to the whole channel. Sends an embed displaying
 * the monsters name, shiny status, level and image.
 */

const Command = require('../base/command');
const PlayerController = require('../controllers/PlayerController');
const Util = require('../utils/utils');

module.exports = class ShowCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'show',
      guildOnly: false,
      description: 'Näytä monsterisi',
      extendedDescription: 'Luo embedin luettelossasi olevasta monsterista joka näyttää sen tason, kuvan ja shiny statuksen',
      usage: '<monsterin id>'
    })
  }

  async execute(msg, args) {
    // Get the number from arguments
    const number = parseInt(args[0]);
    // If the given value is not a number
    if (!Number.isInteger(number)) return msg.reply('Oikea muoto `show <id>`');
    // Find player from database. If we don't find anything, tell the player they have no monsters
    let player = await PlayerController.getPlayer(msg.author.id);
    if (!player) return msg.reply('Sinulla ei ole yhtään monsteria');
    // Find the monster in question from players monsters
    // Assign the monster object with rest of the monster data from the Monsters array
    let monster = player.monsters.find(mon => mon.id === number);
    if (!monster) return msg.reply('Antamallasi numerolla ei löytynyt monsteria');

    msg.channel.send(Util.monsterEmbed(monster, player.color));
  }
}