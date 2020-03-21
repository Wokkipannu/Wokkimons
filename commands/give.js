const monsters = require('../monsters');
const { MessageEmbed } = require('discord.js');
const fs = require('fs');
const players = require('../players');

module.exports = {
  name: 'give',
  description: 'Give a monster',
  execute(msg, args) {
    if (msg.author.id !== '108299947257925632') return;

    const name = args[0];
    const level = parseInt(args[1]);
    const isShiny = parseInt(args[2]);
    const receiver = msg.mentions.users.first();

    if (!name) return msg.reply(`Oikea muoto \`give <name> <level> <shiny> <receiver>\` 1`);
    if (!level || !Number.isInteger(level)) return msg.reply(`Oikea muoto \`give <name> <level> <shiny> <receiver>\` 2`);
    if (!receiver) return msg.reply(`Oikea muoto \`give <name> <level> <shiny> <receiver>\` 3`);

    const monster = new monsters[name];
    monster.level = level;
    monster.isShiny = isShiny ? true : false;

    let player = players.find(player => player.id === receiver.id);
    if (player) {
      player.monsters.push(monster);
    }
    else {
      let ply = {
        id: receiver.id,
        monsters: [monster]
      }
      players.push(ply);
    }

    fs.writeFile('./players.json', JSON.stringify(players, null, 2), (err) => {
      if (err) throw err;
    });

    msg.reply(`Tason ${monster.level} ${monster.isShiny ? `⭐ ${monster.name}` : monster.name}mon annettu pelaajalle ${receiver.username}`);
  }
}