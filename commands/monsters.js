const players = require('../players');
const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'monsters',
  description: 'Display monsters',
  execute(msg, args) {
    let player = players.find(player => player.id === msg.author.id);

    let color = '#1e90ff';
    if (player.color) color = player.color;

    player.monsters.forEach((monster, index) => monster.loc = index);

    const common = player.monsters.filter(monster => monster.rarity === 1);
    const uncommon = player.monsters.filter(monster => monster.rarity === 2);
    const rare = player.monsters.filter(monster => monster.rarity === 3);

    if (player) {
      let embed = new MessageEmbed()
        .setColor(color)
        .setTitle(`${msg.author.username} monsterit`);
        //.setDescription(`${player.monsters.map((monster, index) => `\`${index}\` Tason ${monster.level} ${monster.isShiny ? `⭐ ${monster.name}` : monster.name}`).join('\n')}`)
      if (common.length > 0) embed.addField('Common', `${common.map(mon => `\`${mon.loc}\` Tason ${mon.level} ${mon.isShiny ? `⭐ ${mon.name}` : mon.name}`).join('\n')}`, true);
      if (uncommon.length > 0) embed.addField('Uncommon', `${uncommon.map(mon => `\`${mon.loc}\` Tason ${mon.level} ${mon.isShiny ? `⭐ ${mon.name}` : mon.name}`).join('\n')}`, true);
      if (rare.length > 0) embed.addField('Rare', `${rare.map(mon => `\`${mon.loc}\` Tason ${mon.level} ${mon.isShiny ? `⭐ ${mon.name}` : mon.name}`).join('\n')}`, true);

        //.addField('\u200b', `${player.monsters.map((monster, index) => `\`${index}\` Tason ${monster.level} ${monster.name}`).join('\n')}`)

      msg.channel.send(embed);
    }
    else {
      msg.reply('Sinulla ei ole näytettäviä monstereita. Yritä napata sellainen.');
    }
  }
}