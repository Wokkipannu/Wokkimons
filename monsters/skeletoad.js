const Monster = require('../base/monster');

module.exports = class Skeletoad extends Monster {
  constructor(name, level, image, rarity, isShiny) {
    super(level);

    this.name = 'Skeletoad';
    this.image = 'https://i.imgur.com/Kzh84zz.gif';
    this.shinyImage = 'https://i.imgur.com/Kzh84zz.gif';
    this.rarity = 3;
    this.isShiny = false;
  }
}
