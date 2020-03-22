const Monster = require('../base/monster');

module.exports = class Soy extends Monster {
  constructor(name, level, image, rarity, isShiny) {
    super(level);

    this.name = 'Soy'
    this.image = 'https://i.imgur.com/HmXCFTI.png';
    this.shinyImage = 'https://i.imgur.com/HmXCFTI.png';
    this.rarity = 1;
    this.isShiny = false;
  }
}