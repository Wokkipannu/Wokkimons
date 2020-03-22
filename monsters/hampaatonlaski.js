const Monster = require('../base/monster');

module.exports = class Hampaatonlaski extends Monster {
  constructor(name, level, image, rarity, isShiny) {
    super(level);

    this.name = 'Hampaatonläski'
    this.image = 'https://i.imgur.com/SxgsS2C.png';
    this.shinyImage = 'https://i.imgur.com/SxgsS2C.png';
    this.rarity = 2;
    this.isShiny = false;
  }
}