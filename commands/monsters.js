/***
 * Command Monsters
 * 
 * Display all monsters the player has caught with their level and shiny status
 */

const { MessageEmbed } = require('discord.js');
const PlayerController = require('../controllers/PlayerController');
const Monsters = require('../monsters/monsters');

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
    // Create an empty mons array that we'll populate with the
    // player monsters
    let mons = [];
    // Loop through all player monsters
    player.monsters.forEach(monster => {
      let mon = Monsters.allMonsters.find(m => m.id === monster.monsterId);
      mons.push({
        id: monster.id,
        monsterId: mon.id,
        level: monster.level,
        name: mon.name,
        rarity: mon.rarity,
        isShiny: monster.isShiny
      });
    });
    // Sort the player monsters by their rarity to different rarity groups
    const common = mons.filter(mon => mon.rarity === 1);
    const uncommon = mons.filter(mon => mon.rarity === 2);
    const rare = mons.filter(mon => mon.rarity === 3);
    // If we got a player (which should always exist if we got this far)
    // send their monsters embed to ther current channel
    if (player) {
      let embed = new MessageEmbed()
        .setColor(color)
        .setTitle(`${msg.author.username} monsterit`);
      if (common.length > 0) embed.addField('Common', `${common.map(mon => `\`${mon.id}\` Tason ${mon.level} ${mon.isShiny ? `⭐ ${mon.name}` : mon.name}`).join('\n')}`, true);
      if (uncommon.length > 0) embed.addField('Uncommon', `${uncommon.map(mon => `\`${mon.id}\` Tason ${mon.level} ${mon.isShiny ? `⭐ ${mon.name}` : mon.name}`).join('\n')}`, true);
      if (rare.length > 0) embed.addField('Rare', `${rare.map(mon => `\`${mon.id}\` Tason ${mon.level} ${mon.isShiny ? `⭐ ${mon.name}` : mon.name}`).join('\n')}`, true);

      msg.channel.send(embed);
    }
    else {
      msg.reply('Sinulla ei ole näytettäviä monstereita. Yritä napata sellainen.');
    }
  }
}