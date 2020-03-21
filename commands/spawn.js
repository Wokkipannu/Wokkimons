const monsters = require('../monsters');
const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'spawn',
  description: 'Force spawn a monster',
  execute(msg, args) {
    if (msg.author.id !== '108299947257925632') return;

    const name = args[0];
    const isShiny = args[1];

    if (!name) return msg.reply('Anna nekrumonin nimi!');
    if (!Object.keys(monsters).includes(name)) return msg.reply('Viallinen nimi');

    let monster = new monsters[name];
    monster.level = Math.floor(Math.random() * 100);

    if (isShiny) monster.isShiny = true;

    msg.client.currentMonster = monster;

    const embed = new MessageEmbed()
      .setTitle(`Villi ${monster.isShiny ? '⭐ monsteri' : 'monsteri'} ilmestyi!`)
      .setDescription(`Nappaa se kirjoittamalla w!catch <nimi>`)
      .setImage(isShiny ? monster.shinyImage : monster.image);
  
    msg.channel.send(embed);
  }
}