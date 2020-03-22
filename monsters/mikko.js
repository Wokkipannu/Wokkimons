const Monster = require('../base/monster');

module.exports = class Mikko extends Monster {
  constructor(name, level, image, rarity, isShiny) {
    super(level);

    this.name = 'Mikko'
    this.image = 'https://i.imgur.com/1TioaPe.png';
    this.shinyImage = 'https://i.imgur.com/1TioaPe.png';
    this.rarity = 2;
    this.isShiny = false;
  }
}