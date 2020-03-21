const monsters = require('../monsters');
const players = require('../players');
const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'mons',
  description: 'Display all possible monsters',
  execute(msg, args) {
    let mons = [];
    Object.keys(monsters).forEach(monster => {
      mons.push(new monsters[monster]);
    });

    let player = players.find(player => player.id === msg.author.id);

    // If we don't have a player, create a fake one
    if (!player) player = { id: msg.author.id, monsters: [] };

    const common = mons.filter(mon => mon.rarity === 1);
    const uncommon = mons.filter(mon => mon.rarity === 2);
    const rare = mons.filter(mon => mon.rarity === 3);

    let embed = new MessageEmbed()
      .setTitle(`${msg.author.username} Wokkimondex`);
      embed.addField('Common', common.map(mon => `${mon.name} ${player.monsters.find(monster => monster.name === mon.name) ? '✅' : '❌'}`).join('\n'), true)
      embed.addField('Uncommon', uncommon.map(mon => `${mon.name} ${player.monsters.find(monster => monster.name === mon.name) ? '✅' : '❌'}`).join('\n'), true)
      embed.addField('Rare', rare.map(mon => `${mon.name} ${player.monsters.find(monster => monster.name === mon.name) ? '✅' : '❌'}`).join('\n'), true);
  
    msg.channel.send(embed);  
  }
}