const Monster = require('../base/monster');

module.exports = class Rasila extends Monster {
  constructor(name, level, image, rarity, isShiny) {
    super(level);

    this.name = 'Rasila';
    this.image = 'https://i.imgur.com/QKlXBhB.png';
    this.shinyImage = 'https://i.imgur.com/QKlXBhB.png';
    this.rarity = 1;
    this.isShiny = false;
  }
}
