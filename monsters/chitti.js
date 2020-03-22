const Monster = require('../base/monster');

module.exports = class Chitti extends Monster {
  constructor(name, level, image, rarity, isShiny) {
    super(level);

    this.name = 'Chitti'
    this.image = 'https://i.imgur.com/ZzlgqZP.png';
    this.shinyImage = 'https://i.imgur.com/ZzlgqZP.png';
    this.rarity = 2;
    this.isShiny = false;
  }
}