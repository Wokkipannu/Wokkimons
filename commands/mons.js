/**
 * Command Mons
 * 
 * Displays a list of monsters that exist in the game and also
 * display users progress on catching them all
 */

const { MessageEmbed } = require('discord.js');
const PlayerController = require('../controllers/PlayerController');
const MonController = require('../controllers/MonController');

module.exports = {
  name: 'mons',
  description: 'Display all possible monsters',
  guildOnly: false,
  async execute(msg, args) {
    // Find player from the database
    // If we did not find the player, we'll create a fake player object so we can
    // still display the monsters
    let player = await PlayerController.getPlayer(msg.author.id);
    if (!player) player = { userId: msg.author.id, monsters: [] }
    // Use players embed color or default if not defined
    let color = player.color || '#1e90ff';
    let mons = [...player.monsters];
    // Remove duplicates from mons
    mons = mons.filter((mon, index, self) => self.findIndex(m => m.MonId === mon.MonId) === index)
    // Sort the player monsters by their rarity to different rarity groups
    const common = mons.filter(monster => monster.Mon.rarity === 1);
    const uncommon = mons.filter(monster => monster.Mon.rarity === 2);
    const rare = mons.filter(monster => monster.Mon.rarity === 3);
    // Get all monsters and sort them by rarities
    const Mons = await MonController.getAllMons();
    const commonMonsters = Mons.filter(m => m.rarity === 1);
    const uncommonMonsters = Mons.filter(m => m.rarity === 2);
    const rareMonsters = Mons.filter(m => m.rarity === 3);

    let embed = new MessageEmbed()
      .setColor(color)
      .setTitle(`${msg.author.username} » Collection`);
      embed.addField(`Common (${common.length}/${commonMonsters.length})`, commonMonsters.map(mon => `${mon.name} ${player.monsters.find(monster => monster.MonId === mon.id) ? '✅' : '❌'}`).join('\n'), true)
      embed.addField(`Uncommon (${uncommon.length}/${uncommonMonsters.length})`, uncommonMonsters.map(mon => `${mon.name} ${player.monsters.find(monster => monster.MonId === mon.id) ? '✅' : '❌'}`).join('\n'), true)
      embed.addField(`Rare (${rare.length}/${rareMonsters.length})`, rareMonsters.map(mon => `${mon.name} ${player.monsters.find(monster => monster.MonId === mon.id) ? '✅' : '❌'}`).join('\n'), true);

    msg.channel.send(embed); 
  }
}