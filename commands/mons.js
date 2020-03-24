/**
 * Command Mons
 * 
 * Displays a list of monsters that exist in the game and also
 * display users progress on catching them all
 */

const { MessageEmbed } = require('discord.js');
const PlayerController = require('../controllers/PlayerController');
const Monsters = require('../monsters/monsters');

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
    // Loop through all player monsters
    let mons = [];
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
    // Remove duplicates from mons
    mons = mons.filter((mon, index, self) => self.findIndex(m => m.monsterId === mon.monsterId) === index)
    // Sort the player monsters by their rarity to different rarity groups
    const common = mons.filter(mon => mon.rarity === 1);
    const uncommon = mons.filter(mon => mon.rarity === 2);
    const rare = mons.filter(mon => mon.rarity === 3);

    let embed = new MessageEmbed()
      .setColor(color)
      .setTitle(`${msg.author.username} » Collection`);
      embed.addField(`Common (${common.length}/${Monsters.commonMonsters.length})`, Monsters.commonMonsters.map(mon => `${mon.name} ${player.monsters.find(monster => monster.monsterId === mon.id) ? '✅' : '❌'}`).join('\n'), true)
      embed.addField(`Uncommon (${uncommon.length}/${Monsters.uncommonMonsters.length})`, Monsters.uncommonMonsters.map(mon => `${mon.name} ${player.monsters.find(monster => monster.monsterId === mon.id) ? '✅' : '❌'}`).join('\n'), true)
      embed.addField(`Rare (${rare.length}/${Monsters.rareMonsters.length})`, Monsters.rareMonsters.map(mon => `${mon.name} ${player.monsters.find(monster => monster.monsterId === mon.id) ? '✅' : '❌'}`).join('\n'), true);

    msg.channel.send(embed); 
  }
}