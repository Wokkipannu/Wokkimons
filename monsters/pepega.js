const Monster = require('../base/monster');

module.exports = class Pepega extends Monster {
  constructor(name, level, image, rarity, isShiny) {
    super(level);

    this.name = 'Pepega'
    this.image = 'https://media.discordapp.net/attachments/624224688138354711/688843233459306565/pepegaSpin.gif';
    this.shinyImage = 'https://media.discordapp.net/attachments/624224688138354711/688843233459306565/pepegaSpin.gif';
    this.rarity = 3;
    this.isShiny = false;
  }
}