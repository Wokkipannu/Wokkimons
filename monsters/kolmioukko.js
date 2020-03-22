const Monster = require('../base/monster');

module.exports = class Kolmioukko extends Monster {
  constructor(name, level, image, rarity, isShiny) {
    super(level);

    this.name = 'Kolmioukko'
    this.image = 'https://i.imgur.com/u4QidV6.gif';
    this.shinyImage = 'https://i.imgur.com/u4QidV6.gif';
    this.rarity = 3;
    this.isShiny = false;
  }
}