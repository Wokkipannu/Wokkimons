/**
 * Command Hint
 * 
 * Send a hint to the user about the current monster.
 * Letters are randomly replaces by _ in the name.
 * The current way it's done is not ideal, as this can randomly
 * result in all letters being visible or none at all.
 */

const Command = require('../base/command');

module.exports = class HintCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'hint',
      guildOnly: false,
      description: 'Antaa vinkin monsterin nimestä',
      extendedDescription: 'Muuntaa satunnaisesti monsterin nimestä osia _',
    });
  }

  execute(msg, args) {
    // Get the current monster from collection
    const currentMonster = this.client.monsters.get(msg.guild.id);
    // If we don't have a current monster
    if (!currentMonster) return msg.reply('Odota seuraavaa monsteria');
    // Create the hint variable
    let hint = "";
    // Loop through the letters of the current monsters name
    // If our random value is 1, we'll replace the current letter by _
    // Otherwise the value is 2 and we'll leave the letter as is
    for (let i = 0; i < currentMonster.name.length; i++) {
      let rand = Math.floor(Math.random() * (3 - 1) + 1)
      if (rand === 1) {
        hint += '_'
      }
      else {
        hint += currentMonster.name[i]
      }
    }
    
    msg.reply(`Vinkki: \`${hint}\``);
  }
}