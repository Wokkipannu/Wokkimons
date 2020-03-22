const Monster = require('../base/monster');

module.exports = class Anssi extends Monster {
  constructor(name, level, image, rarity, isShiny) {
    super(level);

    this.name = 'Anssi'
    this.image = 'https://i.imgur.com/g7vEUgf.jpg';
    this.shinyImage = 'https://i.imgur.com/g7vEUgf.jpg';
    this.rarity = 1;
    this.isShiny = false;
  }
}