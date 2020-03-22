const Monster = require('../base/monster');

module.exports = class Karvinen extends Monster {
  constructor(name, level, image, rarity, isShiny) {
    super(level);

    this.name = 'Karvinen'
    this.image = 'https://i.imgur.com/2MF6FYf.png';
    this.shinyImage = 'https://i.imgur.com/2MF6FYf.png';
    this.rarity = 1;
    this.isShiny = false;
  }
}