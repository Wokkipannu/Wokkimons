/**
 * Command Show
 * 
 * Show your monster to the whole channel. Sends an embed displaying
 * the monsters name, shiny status, level and image.
 */

const { MessageEmbed } = require('discord.js');
const PlayerController = require('../controllers/PlayerController');
const Monsters = require('../monsters/monsters');
const moment = require('moment');

module.exports = {
  name: 'show',
  description: 'Show a monster',
  guildOnly: false,
  async execute(msg, args) {
    // Get the number from arguments
    const number = parseInt(args[0]);
    // If the given value is not a number
    if (!Number.isInteger(number)) return msg.reply('Oikea muoto `show <id>`');
    // Find player from database. If we don't find anything, tell the player they have no monsters.
    // Define the color variable by the players color or if nothing is defined, use default
    let player = await PlayerController.getPlayer(msg.author.id);
    if (!player) return msg.reply('Sinulla ei ole yhtään monsteria');
    let color = player.color || '#1e90ff';
    // Find the monster in question from players monsters
    // Assign the monster object with rest of the monster data from the Monsters array
    let monster = player.monsters.find(mon => mon.id === number);
    if (!monster) return msg.reply('Antamallasi numerolla ei löytynyt monsteria');
    let mon = Monsters.allMonsters.find(mon => mon.id === monster.monsterId);

    const embed = new MessageEmbed()
      .setColor(color)
      .setTitle(`Pelaajan ${msg.author.username} ${monster.isShiny ? `⭐ ${mon.name}` : mon.name}`)
      .setDescription(`Taso: **${monster.level}**`)
      .setImage(monster.isShiny ? mon.shinyImage : mon.image)
      .setFooter(`Napattu ${moment(monster.createdAt).format("DD.MM.YYYY HH.mm")}`);

    msg.channel.send(embed);
  }
}