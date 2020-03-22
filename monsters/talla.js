const Monster = require('../base/monster');

module.exports = class Talla extends Monster {
  constructor(name, level, image, rarity, isShiny) {
    super(level);

    this.name = 'Talla'
    this.image = 'https://i.imgur.com/9tsR64R.jpg';
    this.shinyImage = 'https://i.imgur.com/9tsR64R.jpg';
    this.rarity = 1;
    this.isShiny = false;
  }
}