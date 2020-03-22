const Monster = require('../base/monster');

module.exports = class Wab extends Monster {
  constructor(name, level, image, rarity, isShiny) {
    super(level);

    this.name = 'Wab';
    this.image = 'https://i.imgur.com/zuBJBrK.png';
    this.shinyImage = 'https://i.imgur.com/zuBJBrK.png';
    this.rarity = 1;
    this.isShiny = false;
  }
}