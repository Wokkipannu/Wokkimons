/**
 * Command Trade
 * 
 * Give a monster to another player. The other user has no way to refuse.
 */

const Command = require('../base/command');
const PlayerController = require('../controllers/PlayerController');

module.exports = class TradeCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'trade',
      guildOnly: true,
      description: 'Anna monsteri toiselle pelaajalle',
      extendedDescription: 'Anna haluamasi monsteri toiselle pelaajalle',
      usage: '<vastaanottaja> <monsterin id>'
    })
  }

  async execute(msg, args) {
    // Arguments
    const receiver = msg.mentions.users.first();
    const monster = parseInt(args[1]);
    // If receiving user is not mentioned or monster value is not a number
    if (!receiver || !Number.isInteger(monster)) return msg.reply('Oikea muoto on: `trade <Mention> <Monster ID>`');
    // Find the sending player from database and the monster in question
    // from their monsters
    let player = await PlayerController.getPlayer(msg.author.id);
    if (!player) return msg.reply('Sinulla ei ole yhtään monsteria!');
    let mon = player.monsters.find(mon => mon.id === monster);
    if (!monster) return msg.reply('Antamallasi IDllä ei ole monsteria!');
    // Find or create the receiving player from/to the database
    let receivingPlayer = await PlayerController.getPlayer(receiver.id);
    if (!receivingPlayer) receivingPlayer = await PlayerController.createPlayer(receiver.id);
    // Change the monsters PalyerId to the receiving players ID and save it
    mon.PlayerId = receivingPlayer.id;
    mon.save();

    msg.reply(`Annoit tason ${mon.level} ${mon.Mon.memberName} pelaajalle ${receiver.username}`);
  }
}