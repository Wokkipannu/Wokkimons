const Monster = require('../base/monster');

module.exports = class Pinokkio extends Monster {
  constructor(name, level, image, rarity, isShiny) {
    super(level);

    this.name = 'Pinokkio'
    this.image = 'https://i.imgur.com/HP0qPfv.png';
    this.shinyImage = 'https://i.imgur.com/HP0qPfv.png';
    this.rarity = 1;
    this.isShiny = false;
  }
}