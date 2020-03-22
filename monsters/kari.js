const Monster = require('../base/monster');

module.exports = class Kari extends Monster {
  constructor(name, level, image, rarity, isShiny) {
    super(level);

    this.name = 'Kari'
    this.image = 'https://i.imgur.com/cMaQvKw.png';
    this.shinyImage = 'https://i.imgur.com/vvTqzox.png';
    this.rarity = 1;
    this.isShiny = false;
  }
}