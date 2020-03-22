const players = require('../players');
const fs = require('fs');

module.exports = {
  name: 'trade',
  description: 'Trade a monster',
  execute(msg, args) {
    const receiver = msg.mentions.users.first();
    const monster = parseInt(args[1]);

    if (!receiver || !Number.isInteger(monster)) return msg.reply('Oikea muoto on: `trade <Mention> <Monster ID>`');

    let player = players.find(player => player.id === msg.author.id);
    if (!player || player.monsters.length === 0) return msg.reply('Sinulla ei ole yhtään monsteria!');
    if (player.monsters[monster]) {
      let mon = player.monsters[monster];
      let receivingPlayer = players.find(player => player.id === receiver.id);
      if (receivingPlayer) receivingPlayer.monsters.push(player.monsters[monster]);
      else {
        let ply = {
          id: receiver.id,
          monsters: [player.monsters[monster]]
        };
        players.push(ply);
      }

      player.monsters.splice(monster, 1)

      fs.writeFile('./players.json', JSON.stringify(players, null, 2), (err) => {
        if (err) throw err;
      });

      msg.reply(`Annoit ${mon.name}monin pelaajalle ${receiver.username}`);
    }
    else {
      return msg.reply('Antamallasi numerolla ei ole monsteria! Katso monsterisi kirjoittamalla w!monsters');
    }
  }
}