const Monster = require('../base/monster');

module.exports = class Murina extends Monster {
  constructor(name, level, image, rarity, isShiny) {
    super(level);

    this.name = 'Murina'
    this.image = 'https://i.imgur.com/RcM0OU7.png';
    this.shinyImage = 'https://i.imgur.com/RcM0OU7.png';
    this.rarity = 1;
    this.isShiny = false;
  }
}