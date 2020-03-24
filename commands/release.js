/**
 * Command Release
 * 
 * Release a monster back to the wild (or slay them brutally at random)
 */

const PlayerController = require('../controllers/PlayerController');
const MonsterController = require('../controllers/MonsterController');
const Monsters = require('../monsters/monsters');

module.exports = {
  name: 'release',
  description: 'Release monster',
  guildOnly: false,
  async execute(msg, args) {
    // Get the number argument and parse it
    const number = parseInt(args[0]);
    if (number) {
      if (!Number.isInteger(number)) return msg.reply('Antamasi arvo ei ole numero'); // Number was maybe given but it's not an integer
      let player = await PlayerController.getPlayer(msg.author.id); // Get player from the database
      if (!player) return msg.reply('Sinulla ei ole yhtään monsteria!'); // Player does not have any monsters
      let monster = player.monsters.find(mon => mon.id === number); // Find the monster in question by it's id
      if (!monster) return msg.reply('Antamallasi IDllä ei ole monsteria!'); // User gave invalid ID, nothing to do
      Object.assign(monster, Monsters.allMonsters.find(mon => mon.id === monster.monsterId)); // Assign the monster object to the object we fetched from database
      await MonsterController.deleteMonster(number); // Delete the monster by it's ID
      // All possible release messages
      const messages = [
        `Tapoit ${monster.name}monin ☠️`,
        `Raiskasit ${monster.name}monin kuoliaaksi 😭`,
        `Vapautit ${monster.name}monin turvallisesti takaisin luontoon 🤗`,
        `Teloitit ${monster.name}monin 🗡️`,
        `Leikkasit ${monster.name}monin nokareen irti 🍆`,
        `Heitit ${monster.name}monin pois 👋`
      ];
      // Send the random message
      msg.reply(messages[Math.floor(Math.random() * messages.length)]);
    }
    else {
      msg.reply('Anna monsterin numero');
    }
  }
}