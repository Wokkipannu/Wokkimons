const Monster = require('../base/monster');

module.exports = class Pupu15 extends Monster {
  constructor(name, level, image, rarity, isShiny) {
    super(level);

    this.name = 'Pupu15'
    this.image = 'https://i.imgur.com/FWvjnLL.png';
    this.shinyImage = 'https://i.imgur.com/FWvjnLL.png';
    this.rarity = 2;
    this.isShiny = false;
  }
}