const Monster = require('../base/monster');

module.exports = class Kiveskiertyma extends Monster {
  constructor(name, level, image, rarity, isShiny) {
    super(level);

    this.name = 'Kiveskiertymä'
    this.image = 'https://i.imgur.com/8bwDN4d.jpg';
    this.shinyImage = 'https://i.imgur.com/8bwDN4d.jpg';
    this.rarity = 2;
    this.isShiny = false;
  }
}