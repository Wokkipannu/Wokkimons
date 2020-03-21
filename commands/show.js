const players = require('../players');
const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'show',
  description: 'Show a monster',
  execute(msg, args) {
    const number = parseInt(args[0]);

    let player = players.find(player => player.id === msg.author.id);
    if (player) {
      let color = '#1e90ff';
      if (player.color) color = player.color;

      const active = player.active || 0;
      let monster;
      if (number) {
        if (!Number.isInteger(number)) return msg.reply('Antamasi arvo ei ole numero!');
        if (number > player.monsters.length || number < 0) {
          return msg.reply('Antamallasi numerolla ei ole nekrumonia!');
        }
        monster = player.monsters[number];
      }
      else monster = player.monsters[active];

      if (monster) {
        const embed = new MessageEmbed()
          .setColor(color)
          .setTitle(`Pelaajan ${msg.author.username} ${monster.isShiny ? `⭐ ${monster.name}` :monster.name}`)
          .setDescription(`Taso: **${monster.level}**`)
          .setImage(monster.isShiny ? monster.shinyImage : monster.image);
        
        msg.channel.send(embed);
      }
      else {
        msg.reply('Antamallasi numerolla ei löytynyt nekrumonia!');
      }
    }
    else {
      msg.reply('Sinulla ei ole nekrumonia! Nappaa sellainen yhden ilmestyessä kirjoittamalla w!catch');
    }
  }
}