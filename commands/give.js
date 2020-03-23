const { MessageEmbed } = require('discord.js');
const PlayerController = require('../controllers/PlayerController');
const MonsterController = require('../controllers/MonsterController');
const Monsters = require('../monsters/monsters');

module.exports = {
  name: 'give',
  description: 'Give a monster',
  async execute(msg, args) {
    if (msg.author.id !== '108299947257925632') return;

    const name = args[0];
    const level = parseInt(args[1]);
    const isShiny = parseInt(args[2]);
    const receiver = msg.mentions.users.first();

    if (!name) return msg.reply(`Oikea muoto \`give <name> <level> <shiny> <receiver>\` 1`);
    if (!Number.isInteger(level)) return msg.reply(`Oikea muoto \`give <name> <level> <shiny> <receiver>\` 2`);
    if (!Number.isInteger(isShiny)) return msg.reply(`Oikea muoto \`give <name> <level> <shiny> <receiver>\` 3`);
    if (!receiver) return msg.reply(`Oikea muoto \`give <name> <level> <shiny> <receiver>\` 4`);

    const monster = Monsters.allMonsters.find(mon => mon.name.replace(" ", "").toLowerCase() === name.toLowerCase());
    if (!monster) return msg.reply('Invalid monster name');
    monster.level = level;
    monster.isShiny = isShiny ? 1 : 0;

    let player = await PlayerController.getPlayer(receiver.id);
    if (!player) player = await PlayerController.createPlayer(receiver.id);

    await MonsterController.createMonster({ monsterId: monster.id, level: monster.level, isShiny: monster.isShiny, PlayerId: player.id });

    msg.reply(`Tason ${monster.level} ${monster.isShiny ? `⭐ ${monster.name}` : monster.name}mon annettu pelaajalle ${receiver.username}`);
  }
}