/**
 * Command Addbio
 * 
 * Add bio to a monster
 */

const MonController = require('../controllers/MonController');
const Command = require('../base/command');

module.exports = class AddBioCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'addbio',
      description: 'Lisää monsterille bio',
      extendedDescription: 'Lisää show ja view komentoa käytettäessä näkyvän bion. Jos monsterin nimessä on välilyöntejä, tulee ne yhdistää yhteen riviin, esim Hampaaton läski = Hampaatonläski',
      guildOnly: false,
      permissions: 'admin',
      usage: '<Monsterin nimi> <Bio>'
    });
  }

  async execute(msg, args) {
    const name = args[0];
    const bio = args.splice(1, args.length).join(' ');
    if (!name) return msg.reply('Oikea muoto `addbio <name> <bio>`');
    if (!bio) return msg.reply('Oikea muoto `addbio <name> <bio>`');

    let mons = await MonController.getAllMons();
    let mon = mons.find(m => m.name.replace(' ', '').toLowerCase() === name.toLowerCase());
    if (!mon) return msg.reply('Nimellä ei löytynyt monsteria');
    mon.description = bio;
    mon.save();

    return msg.reply(`${mon.memberName} bio muutettu!`);
  }
}