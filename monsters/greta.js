const Monster = require('../base/monster');

module.exports = class Greta extends Monster {
  constructor(name, level, image, rarity, isShiny) {
    super(level);

    this.name = 'Greta'
    this.image = 'https://i.imgur.com/gIqzFLQ.png';
    this.shinyImage = 'https://i.imgur.com/NkGuKtm.png';
    this.rarity = 1;
    this.isShiny = false;
  }
}