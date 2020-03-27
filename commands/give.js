/**
 * Command Give
 * 
 * Administrator command that allows giving a specific monster
 * with defined level and shiny status to a user.
 */

const PlayerController = require('../controllers/PlayerController');
const MonsterController = require('../controllers/MonsterController');
const MonController = require('../controllers/MonController');

module.exports = {
  name: 'give',
  description: 'Give a monster',
  guildOnly: true,
  async execute(msg, args) {
    // If user is not Wokki#0001
    if (msg.author.id !== '108299947257925632') return;

    // Arguments
    const name = args[0];
    const level = parseInt(args[1]);
    const isShiny = parseInt(args[2]);
    const receiver = msg.mentions.users.first();

    // Make sure that our arguments are in correct format
    if (!name) return msg.reply(`Oikea muoto \`give <name> <level> <shiny> <receiver>\` 1`);
    if (!Number.isInteger(level)) return msg.reply(`Oikea muoto \`give <name> <level> <shiny> <receiver>\` 2`);
    if (!Number.isInteger(isShiny)) return msg.reply(`Oikea muoto \`give <name> <level> <shiny> <receiver>\` 3`);
    if (!receiver) return msg.reply(`Oikea muoto \`give <name> <level> <shiny> <receiver>\` 4`);

    // Make sure that the monster we've specified actually exists
    // and give it it's values
    const Monsters = await MonController.getAllMons();
    const monster = Monsters.find(m => m.name.replace(" ", "").toLowerCase() === name.toLowerCase());
    if (!monster) return msg.reply('Invalid monster name');
    monster.level = level;
    monster.isShiny = isShiny ? 1 : 0;

    // Find or create the player
    let player = await PlayerController.getPlayer(receiver.id);
    if (!player) player = await PlayerController.createPlayer(receiver.id);

    // Create a monster to the database
    await MonsterController.createMonster({ MonId: monster.id, level: monster.level, isShiny: monster.isShiny, PlayerId: player.id });

    msg.reply(`Tason ${monster.level} ${monster.isShiny ? `⭐ ${monster.memberName}` : monster.memberName} annettu pelaajalle ${receiver.username}`);
  }
}