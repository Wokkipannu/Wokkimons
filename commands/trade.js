const { MessageEmbed } = require('discord.js');
const PlayerController = require('../controllers/PlayerController');
const MonsterController = require('../controllers/MonsterController');
const Monsters = require('../monsters/monsters');

module.exports = {
  name: 'trade',
  description: 'Trade a monster',
  async execute(msg, args) {
    const receiver = msg.mentions.users.first();
    const monster = parseInt(args[1]);

    if (!receiver || !Number.isInteger(monster)) return msg.reply('Oikea muoto on: `trade <Mention> <Monster ID>`');

    let player = await PlayerController.getPlayer(msg.author.id);
    if (!player) return msg.reply('Sinulla ei ole yhtään monsteria!');
    let mon = player.monsters.find(mon => mon.id === monster);
    if (!monster) return msg.reply('Antamallasi IDllä ei ole monsteria!');

    let receivingPlayer = await PlayerController.getPlayer(receiver.id);
    if (!receivingPlayer) receivingPlayer = await PlayerController.createPlayer(receiver.id);
    let updatedMon = await MonsterController.updateMonster(monster, receivingPlayer.id)

    Object.assign(mon, Monsters.allMonsters.find(m => m.id === mon.monsterId));

    msg.reply(`Annoit ${mon.name}monin pelaajalle ${receiver.username}`);
  }
}