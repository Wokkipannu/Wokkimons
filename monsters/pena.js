const Monster = require('../base/monster');

module.exports = class Pena extends Monster {
  constructor(name, level, image, rarity, isShiny) {
    super(level);

    this.name = 'Pena';
    this.image = 'https://i.imgur.com/04T1i78.png';
    this.shinyImage = 'https://i.imgur.com/04T1i78.png';
    this.rarity = 2;
    this.isShiny = false;
  }
}
