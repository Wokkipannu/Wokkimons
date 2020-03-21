const Monster = require('../base/monster');

module.exports = class Gruumer extends Monster {
  constructor(name, level, image, rarity, isShiny) {
    super(level);

    this.name = 'Gruumer';
    this.image = 'https://i.imgur.com/vO3Q3ZS.png';
    this.shinyImage = 'https://i.imgur.com/vO3Q3ZS.png';
    this.rarity = 1;
    this.isShiny = false;
  }
}
