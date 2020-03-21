const players = require('../players');
const fs = require('fs');

module.exports = {
  name: 'select',
  description: 'Set active monster',
  execute(msg, args) {
    const number = parseInt(args[0]);
    if (number) {
      if (!Number.isInteger(number)) return msg.reply('Arvon tulee olla numero');

      let player = players.find(player => player.id === msg.author.id);
      if (player) {
        player.active = number;
        fs.writeFile('./players.json', JSON.stringify(players, null, 2), (err) => {
          if (err) throw err;
        });
        const monster = player.monsters[number];
        msg.reply(`Tason ${monster.level} ${monster.name} on nyt aktiivinen`);
      }
      else {
        msg.reply('Sinulla ei ole yhtään nekrumonia! Hanki semmoinen kirjoittamalla w!catch');
      }
    }
    else {
      msg.reply('Anna nekrumonin numero');
    }
  }
}