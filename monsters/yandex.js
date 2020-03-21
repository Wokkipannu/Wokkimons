const Monster = require('../base/monster');

module.exports = class Yandex extends Monster {
  constructor(name, level, image, rarity, isShiny) {
    super(level);

    this.name = 'Yandex'
    this.image = 'https://im2.ezgif.com/tmp/ezgif-2-9c70b30dbad8.gif';
    this.shinyImage = 'https://im2.ezgif.com/tmp/ezgif-2-9c70b30dbad8.gif';
    this.rarity = 3;
    this.isShiny = false;
  }
}