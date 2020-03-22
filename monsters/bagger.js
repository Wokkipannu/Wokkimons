const Monster = require('../base/monster');

module.exports = class Bagger extends Monster {
  constructor(name, level, image, rarity, isShiny) {
    super(level);

    this.name = 'Bagger'
    this.image = 'https://i.imgur.com/iaZYCB2.png';
    this.shinyImage = 'https://i.imgur.com/iaZYCB2.png';
    this.rarity = 1;
    this.isShiny = false;
  }
}