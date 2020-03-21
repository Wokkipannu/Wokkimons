const Monster = require('../base/monster');

module.exports = class Tallapeli extends Monster {
  constructor(name, level, image, rarity, isShiny) {
    super(level);

    this.name = 'Tallapeli';
    this.image = 'https://i.imgur.com/tkxd5f8.png';
    this.shinyImage = 'https://i.imgur.com/tkxd5f8.png';
    this.rarity = 1;
    this.isShiny = false;
  }
}
