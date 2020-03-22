const Monster = require('../base/monster');

module.exports = class Gerhard extends Monster {
  constructor(name, level, image, rarity, isShiny) {
    super(level);

    this.name = 'Gerhard'
    this.image = 'https://i.imgur.com/a71IZJk.jpg';
    this.shinyImage = 'https://i.imgur.com/a71IZJk.jpg';
    this.rarity = 2;
    this.isShiny = false;
  }
}