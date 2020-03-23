const { MessageEmbed } = require('discord.js');
const PlayerController = require('../controllers/PlayerController');
const MonsterController = require('../controllers/MonsterController');
const Monsters = require('../monsters/monsters');

module.exports = {
  name: 'release',
  description: 'Release monster',
  async execute(msg, args) {
    const number = parseInt(args[0]);
    if (number) {
      if (!Number.isInteger(number)) return msg.reply('Antamasi arvo ei ole numero');
      let player = await PlayerController.getPlayer(msg.author.id);
      if (!player) return msg.reply('Sinulla ei ole yhtään monsteria!');
      let monster = player.monsters.find(mon => mon.id === number);
      if (!monster) return msg.reply('Antamallasi IDllä ei ole monsteria!');
      Object.assign(monster, Monsters.allMonsters.find(mon => mon.id === monster.monsterId));
      await MonsterController.deleteMonster(number);

      const messages = [
        `Tapoit ${monster.name}monin ☠️`,
        `Raiskasit ${monster.name}monin kuoliaaksi 😭`,
        `Vapautit ${monster.name}monin turvallisesti takaisin luontoon 🤗`,
        `Teloitit ${monster.name}monin 🗡️`,
        `Leikkasit ${monster.name}monin nokareen irti 🍆`,
        `Heitit ${monster.name}monin pois 👋`
      ];

      msg.reply(messages[Math.floor(Math.random() * messages.length)]);
    }
    else {
      msg.reply('Anna monsterin numero');
    }
  }
}