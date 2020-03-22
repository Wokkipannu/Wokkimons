const Monster = require('../base/monster');

module.exports = class Grilli extends Monster {
  constructor(name, level, image, rarity, isShiny) {
    super(level);

    this.name = 'Grilli'
    this.image = 'https://i.imgur.com/HKkcjI5.png';
    this.shinyImage = 'https://i.imgur.com/HKkcjI5.png';
    this.rarity = 1;
    this.isShiny = false;
  }
}