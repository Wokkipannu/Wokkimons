const { MessageEmbed } = require('discord.js');
const Monsters = require('../monsters/monsters');

module.exports = {
  name: 'spawn',
  description: 'Force spawn a monster',
  guildOnly: false,
  execute(msg, args) {
    if (msg.author.id !== '108299947257925632') return;

    const name = args[0];
    const isShiny = args[1];

    let monster = Monsters.allMonsters.find(mon => mon.name.replace(" ", "").toLowerCase() === name.toLowerCase());
    if (!monster) return msg.reply('Viallinen nimi');
    monster.isShiny = isShiny ? 1 : 0;
    monster.level = Monsters.getLevel();

    msg.client.currentMonster.set(msg.guild.id, monster);

    const embed = new MessageEmbed()
      .setTitle(`Villi ${monster.isShiny ? '⭐ monsteri' : 'monsteri'} ilmestyi!`)
      .setDescription(`Nappaa se kirjoittamalla w!catch <nimi>`)
      .setImage(isShiny ? monster.shinyImage : monster.image);
  
    msg.channel.send(embed);
  }
}