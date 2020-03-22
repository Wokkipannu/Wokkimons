const Monster = require('../base/monster');

module.exports = class Mamu extends Monster {
  constructor(name, level, image, rarity, isShiny) {
    super(level);

    this.name = 'Mamu'
    this.image = 'https://i.imgur.com/x8oa0zw.png';
    this.shinyImage = 'https://i.imgur.com/x8oa0zw.png';
    this.rarity = 2;
    this.isShiny = false;
  }
}