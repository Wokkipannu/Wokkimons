/***
 * Command Monsters
 * 
 * Display all monsters the player has caught with their level and shiny status
 */

const { MessageEmbed } = require('discord.js');
const PlayerController = require('../controllers/PlayerController');

module.exports = {
  name: 'monsters',
  guildOnly: false,
  description: 'Display monsters',
  async execute(msg, args) {
    // Fetch the player from database
    // If we don't have a player in the database, we'll send them a message
    let player = await PlayerController.getPlayer(msg.author.id);
    if (!player) return msg.reply('Sinulla ei ole yhtään monsteria!');
    // Get the player embed color or use default if not defined
    let color = player.color || '#1e90ff';
    // Sort the player monsters by their rarity to different rarity groups
    const common = player.monsters.filter(monster => monster.Mon.rarity === 1);
    const uncommon = player.monsters.filter(monster => monster.Mon.rarity === 2);
    const rare = player.monsters.filter(monster => monster.Mon.rarity === 3);
    // If we got a player (which should always exist if we got this far)
    // send their monsters embed to ther current channel
    if (player) {
      let embed = new MessageEmbed()
        .setColor(color)
        .setTitle(`${msg.author.username} » Monsterit`);
      if (common.length > 0) embed.addField('Common', `${common.map(monster => `\`${monster.id}\` Tason ${monster.level} ${monster.isShiny ? `⭐ ${monster.Mon.name}` : monster.Mon.name}`).join('\n')}`, true);
      if (uncommon.length > 0) embed.addField('Uncommon', `${uncommon.map(monster => `\`${monster.id}\` Tason ${monster.level} ${monster.isShiny ? `⭐ ${monster.Mon.name}` : monster.Mon.name}`).join('\n')}`, true);
      if (rare.length > 0) embed.addField('Rare', `${rare.map(monster => `\`${monster.id}\` Tason ${monster.level} ${monster.isShiny ? `⭐ ${monster.Mon.name}` : monster.Mon.name}`).join('\n')}`, true);

      if (args[0] === 'dm') {
        msg.author.send(embed);
        msg.delete();
      }
      else {
        msg.channel.send(embed);
      }
    }
    else {
      msg.reply('Sinulla ei ole näytettäviä monstereita. Yritä napata sellainen.');
    }
  }
}