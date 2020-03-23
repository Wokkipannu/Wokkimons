const { MessageEmbed } = require('discord.js');
const PlayerController = require('../controllers/PlayerController');
const Monsters = require('../monsters/monsters');

module.exports = {
  name: 'mons',
  description: 'Display all possible monsters',
  guildOnly: false,
  async execute(msg, args) {
    let player = await PlayerController.getPlayer(msg.author.id);
    if (!player) player = { userId: msg.author.id, monsters: [] }

    let color = player.color || '#1e90ff';

    let embed = new MessageEmbed()
      .setColor(color)
      .setTitle(`${msg.author.username} Wokkimondex`);
      embed.addField('Common', Monsters.commonMonsters.map(mon => `${mon.name} ${player.monsters.find(monster => monster.monsterId === mon.id) ? '✅' : '❌'}`).join('\n'), true)
      embed.addField('Uncommon', Monsters.uncommonMonsters.map(mon => `${mon.name} ${player.monsters.find(monster => monster.monsterId === mon.id) ? '✅' : '❌'}`).join('\n'), true)
      embed.addField('Rare', Monsters.rareMonsters.map(mon => `${mon.name} ${player.monsters.find(monster => monster.monsterId === mon.id) ? '✅' : '❌'}`).join('\n'), true);

    msg.channel.send(embed); 
  }
}