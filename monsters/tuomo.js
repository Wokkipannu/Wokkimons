const Monster = require('../base/monster');

module.exports = class Tuomo extends Monster {
  constructor(name, level, image, rarity, isShiny) {
    super(level);

    this.name = 'Tuomo';
    this.image = 'https://i.imgur.com/trbXcd4.png';
    this.shinyImage = 'https://i.imgur.com/trbXcd4.png';
    this.rarity = 1;
    this.isShiny = false;
  }
}