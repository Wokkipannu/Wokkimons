const Monster = require('../base/monster');

module.exports = class Avaimet extends Monster {
  constructor(name, level, image, rarity, isShiny) {
    super(level);

    this.name = 'Avaimet';
    this.image = 'https://i.imgur.com/5rL4gX5.png';
    this.shinyImage = 'https://i.imgur.com/5rL4gX5.png';
    this.rarity = 1;
    this.isShiny = false;
  }
}
