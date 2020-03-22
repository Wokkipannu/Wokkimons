const Monster = require('../base/monster');

module.exports = class Yandex extends Monster {
  constructor(name, level, image, rarity, isShiny) {
    super(level);

    this.name = 'Yandex'
    this.image = 'https://i.imgur.com/OHWzczh.gif';
    this.shinyImage = 'https://i.imgur.com/OHWzczh.gif';
    this.rarity = 3;
    this.isShiny = false;
  }
}