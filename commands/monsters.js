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
    const common = player.monsters.filter(monster => monster.Mon.rarity === 1).sort((a, b) => {
      let textA = a.Mon.name.toUpperCase();
      let textB = b.Mon.name.toUpperCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
    const uncommon = player.monsters.filter(monster => monster.Mon.rarity === 2).sort((a, b) => {
      let textA = a.Mon.name.toUpperCase();
      let textB = b.Mon.name.toUpperCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
    const rare = player.monsters.filter(monster => monster.Mon.rarity === 3).sort((a, b) => {
      let textA = a.Mon.name.toUpperCase();
      let textB = b.Mon.name.toUpperCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
    // If we got a player (which should always exist if we got this far)
    // send their monsters embed to ther current channel
    if (player) {
      let num = parseInt(args[0]);
      if (!num) num = 1;
      if (!Number.isInteger(num)) return msg.reply('Arvon tulee olla numero');
      if (num < 1) return msg.reply('Arvon tulee olla vähintään 1');

      let c = common.slice((num - 1) * 25, 25 * num);
      let uc = uncommon.slice((num - 1) * 25, 25 * num);
      let r = rare.slice((num - 1) * 25, 25 * num);

      let embed = new MessageEmbed()
        .setColor(color)
        .setTitle(`${msg.author.username} » Monsterit sivu ${num}`);
      if (c.length > 0) embed.addField('Common', `${c.map(monster => `\`${monster.id}\` Tason ${monster.level} ${monster.isShiny ? `⭐ ${monster.Mon.name}` : monster.Mon.name}`).join('\n')}`, true);
      if (uc.length > 0) embed.addField('Uncommon', `${uc.map(monster => `\`${monster.id}\` Tason ${monster.level} ${monster.isShiny ? `⭐ ${monster.Mon.name}` : monster.Mon.name}`).join('\n')}`, true);
      if (r.length > 0) embed.addField('Rare', `${r.map(monster => `\`${monster.id}\` Tason ${monster.level} ${monster.isShiny ? `⭐ ${monster.Mon.name}` : monster.Mon.name}`).join('\n')}`, true);

      msg.channel.send(embed);
    }
    else {
      msg.reply('Sinulla ei ole näytettäviä monstereita. Yritä napata sellainen.');
    }
  }
}