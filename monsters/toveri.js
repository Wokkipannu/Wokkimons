const Monster = require('../base/monster');

module.exports = class Toveri extends Monster {
  constructor(name, level, image, rarity, isShiny) {
    super(level);

    this.name = 'Toveri'
    this.image = 'https://i.imgur.com/ItfvElx.png';
    this.shinyImage = 'https://i.imgur.com/ItfvElx.png';
    this.rarity = 1;
    this.isShiny = false;
  }
}