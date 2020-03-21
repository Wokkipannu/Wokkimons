const Monster = require('../base/monster');

module.exports = class Olli extends Monster {
  constructor(name, level, image, rarity, isShiny) {
    super(level);

    this.name = 'Olli';
    this.image = 'https://i.imgur.com/ZsITuUy.png';
    this.shinyImage = 'https://i.imgur.com/ZsITuUy.png';
    this.rarity = 2;
    this.isShiny = false;
  }
}
