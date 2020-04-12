/**
 * Command Release
 * 
 * Release a monster back to the wild (or slay them brutally at random)
 */

const Command = require('../base/command');
const PlayerController = require('../controllers/PlayerController');
const MonsterController = require('../controllers/MonsterController');

module.exports = class ReleaseCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'release',
      guildOnly: false,
      description: 'Vapauta monsteri',
      extendedDescription: 'Poistaa monsterin luettelostasi lopullisesti',
      usage: '<monsterin id>'
    })
  }

  async execute(msg, args) {
    // Get the number argument and parse it
    const number = parseInt(args[0]);
    if (number) {
      if (!Number.isInteger(number)) return msg.reply('Antamasi arvo ei ole numero'); // Number was maybe given but it's not an integer
      let player = await PlayerController.getPlayer(msg.author.id); // Get player from the database
      if (!player) return msg.reply('Sinulla ei ole yhtään monsteria!'); // Player does not have any monsters
      let monster = player.monsters.find(mon => mon.id === number); // Find the monster in question by it's id
      if (!monster) return msg.reply('Antamallasi IDllä ei ole monsteria!'); // User gave invalid ID, nothing to do
      await MonsterController.deleteMonster(number); // Delete the monster by it's ID
      // All possible release messages
      const messages = [
        `Tapoit ${monster.Mon.memberName} ☠️`,
        `Raiskasit ${monster.Mon.memberName} kuoliaaksi 😭`,
        `Vapautit ${monster.Mon.memberName} turvallisesti takaisin luontoon 🤗`,
        `Teloitit ${monster.Mon.memberName} 🗡️`,
        `Leikkasit ${monster.Mon.memberName} nokareen irti 🍆`,
        `Heitit ${monster.Mon.memberName} pois 👋`
      ];
      // Send the random message
      msg.reply(messages[Math.floor(Math.random() * messages.length)]);
    }
    else {
      msg.reply('Anna monsterin numero');
    }
  }
}