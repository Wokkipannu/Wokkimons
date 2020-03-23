const { MessageEmbed } = require('discord.js');
const PlayerController = require('../controllers/PlayerController');
const MonsterController = require('../controllers/MonsterController');

module.exports = {
  name: 'catch',
  usage: '<nimi>',
  description: 'Nappaa monsteri',
  guildOnly: true,
  async execute(msg, args) {
    const name = args.join(' ');
    const currentMonster = msg.client.currentMonster.get(msg.guild.id);

    if (!name) return msg.reply(`Syötä nimi. Esimerkki catch ${usage}`);

    if (currentMonster) {
      if (name.toLowerCase() !== currentMonster.name.toLowerCase()) return msg.reply('Väärä nimi!');
      let player = await PlayerController.getPlayer(msg.author.id);
      if (!player) player = await PlayerController.createPlayer(msg.author.id);

      await MonsterController.createMonster({ monsterId: currentMonster.id, level: currentMonster.level, isShiny: currentMonster.isShiny, PlayerId: player.id });

      const embed = new MessageEmbed()
        .setTitle(currentMonster.name)
        .setDescription(`Taso: **${currentMonster.level}**`)
        .setImage(currentMonster.image);

      msg.reply(`Onneksi olkoon! Nappasit tason **${currentMonster.level}** **${currentMonster.name}monin**!`);
      msg.channel.send(embed);

      msg.client.currentMonster.set(msg.guild.id, '');
    }
    else {
      msg.reply('Odota seuraavaa nekrumonia');
    }
  }
}