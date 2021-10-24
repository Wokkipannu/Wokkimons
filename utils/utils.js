const { MessageEmbed } = require('discord.js');
const moment = require('moment');

function getLevel() {
  return Math.floor(Math.random() * 101);
}

function monsterEmbed(monster, color) {
  if (!color) {
    if (monster.Mon) {
      if (monster.Mon.rarity === 1) color = process.env.COMMON_COLOR;
      else if (monster.Mon.rarity === 2) color = process.env.UNCOMMON_COLOR;
      else if (monster.Mon.rarity === 3) color = process.env.RARE_COLOR;
      else color = process.env.COMMON_COLOR;
    }
    else {
      if (monster.rarity === 1) color = process.env.COMMON_COLOR;
      else if (monster.rarity === 2) color = process.env.UNCOMMON_COLOR;
      else if (monster.rarity === 3) color = process.env.RARE_COLOR;
      else color = process.env.COMMON_COLOR;
    }
  }

  let embed = new MessageEmbed()
    .setColor(color);

  if (monster.PlayerId) {
    embed
      .setTitle(monster.isShiny ? `⭐ ${monster.Mon.name}` : monster.Mon.name)
      .setDescription(`Taso ${monster.level}\n*${monster.Mon.description}*`)
      .setImage(monster.isShiny ? monster.Mon.shinyImage : monster.Mon.image)
      .setFooter(`Napattu ${moment(monster.createdAt).format("DD.MM.YYYY HH.mm")}`)
  }
  else {
    embed
      .setTitle(`Villi ${monster.isShiny ? '⭐ monsteri' : 'monsteri'} ilmestyi!`)
      .setDescription('Nappaa se kirjoittamalla w!catch <nimi>')
      .setImage(monster.isShiny ? monster.shinyImage : monster.image);
  }

  return embed;
}

module.exports = {
  getLevel,
  monsterEmbed
};