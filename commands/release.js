const fs = require('fs');
const players = require('../players');

module.exports = {
  name: 'release',
  description: 'Release monster',
  execute(msg, args) {
    const number = args[0];
    if (number) {
      let player = players.find(player => player.id === msg.author.id);
      if (player) {
        if (player.active === number) player.active = 0;
        const monster = player.monsters[number];
        if (monster) {
          player.monsters.splice(number, 1)
          fs.writeFile('./players.json', JSON.stringify(players, null, 2), (err) => {
            if (err) throw err;
          });

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
          msg.reply('Antamallasi numerolla ei ole monsteria!');
        }
      }
      else {
        msg.reply('Sinulla ei ole yhtään monsteria!');
      }
    }
    else {
      msg.reply('Anna monsterin numero');
    }
  }
}