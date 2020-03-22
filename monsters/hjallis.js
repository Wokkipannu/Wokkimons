const Monster = require('../base/monster');

module.exports = class Jose extends Monster {
  constructor(name, level, image, rarity, isShiny) {
    super(level);

    this.name = 'Hjallis'
    this.image = 'https://i.imgur.com/66luRtV.png';
    this.shinyImage = 'https://i.imgur.com/66luRtV.png';
    this.rarity = 1;
    this.isShiny = false;
  }
}