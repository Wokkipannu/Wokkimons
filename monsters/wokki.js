const Monster = require('../base/monster');

module.exports = class Wokki extends Monster {
  constructor(name, level, image, rarity, isShiny) {
    super(level);

    this.name = 'Wokki'
    this.image = 'https://i.imgur.com/4ak9H6D.jpg';
    this.shinyImage = 'https://i.imgur.com/4ak9H6D.jpg';
    this.rarity = 1;
    this.isShiny = false;
  }
}