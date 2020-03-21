const Monster = require('../base/monster');

module.exports = class Kimmo extends Monster {
  constructor(name, level, image, rarity, isShiny) {
    super(level);

    this.name = 'Kimmo'
    this.image = 'https://i.imgur.com/nzzW2Yi.png';
    this.shinyImage = 'https://i.imgur.com/nzzW2Yi.png';
    this.rarity = 1;
    this.isShiny = false;
  }
}
