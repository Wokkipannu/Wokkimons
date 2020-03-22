const Monster = require('../base/monster');

module.exports = class Wabuu extends Monster {
  constructor(name, level, image, rarity, isShiny) {
    super(level);

    this.name = 'Wabuu';
    this.image = 'https://i.imgur.com/GDERK1Z.png';
    this.shinyImage = 'https://i.imgur.com/GDERK1Z.png';
    this.rarity = 2;
    this.isShiny = false;
  }
}