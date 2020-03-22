const Monster = require('../base/monster');

module.exports = class Mimo extends Monster {
  constructor(name, level, image, rarity, isShiny) {
    super(level);

    this.name = 'Mimo'
    this.image = 'https://i.imgur.com/1IAVnRX.gif';
    this.shinyImage = 'https://i.imgur.com/1IAVnRX.gif';
    this.rarity = 1;
    this.isShiny = false;
  }
}