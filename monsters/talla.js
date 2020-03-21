const Monster = require('../base/monster');

module.exports = class Talla extends Monster {
  constructor(name, level, image, rarity, isShiny) {
    super(level);

    this.name = 'Talla'
    this.image = 'https://i.ylilauta.org/e2/21b0099c.jpg';
    this.shinyImage = 'https://i.ylilauta.org/e2/21b0099c.jpg';
    this.rarity = 1;
    this.isShiny = false;
  }
}