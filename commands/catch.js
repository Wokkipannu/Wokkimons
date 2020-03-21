const { MessageEmbed } = require('discord.js');
const fs = require('fs');
const players = require('../players');

module.exports = {
  name: 'catch',
  description: 'Nappaa monsteri',
  execute(msg, args) {
    const name = args.join(' ');
    const currentMonster = msg.client.currentMonster;

    if (!name) return msg.reply('Väärä nimi!');

    if (currentMonster) {
      if (name.toLowerCase() !== currentMonster.getName().toLowerCase()) return msg.reply('Väärä nimi!');
      let player = players.find(player => player.id === msg.author.id);

      if (player) {
        console.log('Player already exists, adding to monsters');
        player.monsters.push(currentMonster);
      }
      else {
        console.log('Player does not exist, creating new player');
        let player = {
          id: msg.author.id,
          monsters: [currentMonster]
        }
        console.log('Pushing player to players list');
        players.push(player);
      }
      //console.log(players);
      console.log('Writing players to file');
      fs.writeFile('./players.json', JSON.stringify(players, null, 2), (err) => {
        if (err) throw err;
      });

      const embed = new MessageEmbed()
        .setTitle(currentMonster.name)
        .setDescription(`Taso: **${currentMonster.level}**`)
        .setImage(currentMonster.image);

      msg.reply(`Onneksi olkoon! Nappasit tason **${currentMonster.getLevel()}** **${currentMonster.getName()}monin**!`);
      msg.channel.send(embed);

      msg.client.currentMonster = '';
    }
    else {
      msg.reply('Odota seuraavaa nekrumonia');
    }
  }
}