const players = require('../players');
const fs = require('fs');

module.exports = {
  name: 'color',
  description: 'Change embed color',
  execute(msg, args) {
    const color = args[0];

    if (!color) msg.reply('Anna väri hexadesimaalina. Esimerkki `#1e90ff`');

    let player = players.find(player => player.id === msg.author.id);
    if (player) {
      player.color = color;
      fs.writeFile('./players.json', JSON.stringify(players, null, 2), (err) => {
        if (err) throw err;
      });
      msg.reply(`Värisi vaihdettu \`${color}\``);
    }
    else {
      msg.reply('Hanki monsteri ennen kun vaihdat väriä');
    }
  }
}