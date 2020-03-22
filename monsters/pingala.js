const Monster = require('../base/monster');

module.exports = class Pingala extends Monster {
  constructor(name, level, image, rarity, isShiny) {
    super(level);

    this.name = 'Pingala';
    this.image = 'https://i.imgur.com/qiqOPjY.png';
    this.shinyImage = 'https://i.imgur.com/1tvOdTL.png';
    this.rarity = 1;
    this.isShiny = false;
  }
}
