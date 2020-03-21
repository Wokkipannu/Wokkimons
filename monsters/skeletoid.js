const Monster = require('../base/monster');

module.exports = class Skeletoid extends Monster {
  constructor(name, level, image, rarity, isShiny) {
    super(level);

    this.name = 'Skeletoid';
    this.image = 'https://i.imgur.com/Kzh84zz.gif';
    this.shinyImage = 'https://i.imgur.com/Kzh84zz.gif';
    this.rarity = 3;
    this.isShiny = false;
  }
}
