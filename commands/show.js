const { MessageEmbed } = require('discord.js');
const PlayerController = require('../controllers/PlayerController');
const MonsterController = require('../controllers/MonsterController');
const Monsters = require('../monsters/monsters');
const moment = require('moment');

module.exports = {
  name: 'show',
  description: 'Show a monster',
  async execute(msg, args) {
    const number = parseInt(args[0]);

    if (!Number.isInteger(number)) return msg.reply('Oikea muoto `show <id>`');

    let player = await PlayerController.getPlayer(msg.author.id);
    if (!player) return msg.reply('Sinulla ei ole yhtään monsteria');
    let color = player.color || '#1e90ff';

    let monster = player.monsters.find(mon => mon.id === number);
    Object.assign(monster, Monsters.allMonsters.find(mon => mon.id === monster.monsterId));
    if (!monster) return msg.reply('Antamallasi numerolla ei löytynyt monsteria');

    const embed = new MessageEmbed()
      .setColor(color)
      .setTitle(`Pelaajan ${msg.author.username} ${monster.isShiny ? `⭐ ${monster.name}` : monster.name}`)
      .setDescription(`Taso: **${monster.level}**`)
      .setImage(monster.isShiny ? monster.shinyImage : monster.image)
      .setFooter(`Napattu ${moment(monster.createdAt).format("DD.MM.YYYY HH.mm")}`);

    msg.channel.send(embed);
  }
}