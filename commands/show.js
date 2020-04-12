/**
 * Command Show
 * 
 * Show your monster to the whole channel. Sends an embed displaying
 * the monsters name, shiny status, level and image.
 */

const Command = require('../base/command');
const { MessageEmbed } = require('discord.js');
const PlayerController = require('../controllers/PlayerController');
const moment = require('moment');

module.exports = class ShowCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'show',
      guildOnly: false,
      description: 'Näytä monsterisi',
      extendedDescription: 'Luo embedin luettelossasi olevasta monsterista joka näyttää sen tason, kuvan ja shiny statuksen',
      usage: '<monsterin id>'
    })
  }

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

    const embed = new MessageEmbed()
      .setColor(color)
      .setTitle(`Pelaajan ${msg.author.username} ${monster.isShiny ? `⭐ ${monster.Mon.name}` : monster.Mon.name}`)
      .setDescription(`Taso: **${monster.level}**\n*${monster.Mon.description}*`)
      .setImage(monster.isShiny ? monster.Mon.shinyImage : monster.Mon.image)
      .setFooter(`Napattu ${moment(monster.createdAt).format("DD.MM.YYYY HH.mm")}`);

    msg.channel.send(embed);
  }
}