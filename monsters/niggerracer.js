const Monster = require('../base/monster');

module.exports = class NiggerRacer extends Monster {
  constructor(name, level, image, rarity, isShiny) {
    super(level);

    this.name = 'Nigger Racer'
    this.image = 'https://i.imgur.com/V040C86.png';
    this.shinyImage = 'https://i.imgur.com/V040C86.png';
    this.rarity = 2;
    this.isShiny = false;
  }
}