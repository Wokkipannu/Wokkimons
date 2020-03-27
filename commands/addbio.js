/**
 * Command Addbio
 * 
 * Add bio to a monster
 */

const MonController = require('../controllers/MonController');

module.exports = {
  name: 'addbio',
  description: 'Add bio to a monster',
  guildOnly: false,
  async execute(msg, args) {
    const allowed = ['108299947257925632', '242657174193438720', '128685552450011137', '117985849257230345', '173001643128782849', '108617380552273920', '127385722633191424', '206093730904670208', '134032786611765248'];
    if (!allowed.includes(msg.author.id)) return msg.reply('Sulla ei ole oikeuksia');

    const name = args[0];
    const bio = args.splice(1, args.length).join(' ');
    if (!name) return msg.reply('Oikea muoto `addbio <name> <bio>`');
    if (!bio) return msg.reply('Oikea muoto `addbio <name> <bio>`');

    let mon = await MonController.getMonByName(name);
    mon.description = bio;
    mon.save();

    return msg.reply(`${mon.memberName} bio muutettu!`);
  }
}