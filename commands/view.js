/**
 * Command View
 * 
 * Displays a monster
 */

const { MessageEmbed } = require('discord.js');
const MonController = require('../controllers/MonController');

module.exports = {
  name: 'view',
  description: 'View a specific monster',
  guildOnly: false,
  permissions: 'admin',
  async execute(msg, args) {
    const name = args.join(' ').toLowerCase();
    if (!name) return msg.reply('Oikea muoto `view <name>`');
    const Monsters = await MonController.getAllMons();
    const Monster = Monsters.find(m => m.name.toLowerCase() === name.toLowerCase());
    if (Monster) {
      const embed = new MessageEmbed()
        .setTitle(Monster.name)
        .setDescription(`*${Monster.description}*`)
        .setImage(Monster.image);

      msg.channel.send(embed);

      if (Monster.image !== Monster.shinyImage) {
        const shinyEmbed = new MessageEmbed()
          .setTitle(`⭐ ${Monster.name}`)
          .setDescription(`*${Monster.description}*`)
          .setImage(Monster.shinyImage);

        msg.channel.send(shinyEmbed);
      }
    }
    else {
      return msg.reply('Oikea muoto `view <name>`');
    }
  }
}