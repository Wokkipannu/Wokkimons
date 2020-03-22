const Monster = require('../base/monster');

module.exports = class Polysokeri extends Monster {
  constructor(name, level, image, rarity, isShiny) {
    super(level);

    this.name = 'Pölysokerikakku'
    this.image = 'https://i.imgur.com/gZckwJI.gif';
    this.shinyImage = 'https://i.imgur.com/gZckwJI.gif';
    this.rarity = 3;
    this.isShiny = false;
  }
}