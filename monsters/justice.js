const Monster = require('../base/monster');

module.exports = class Justice extends Monster {
  constructor(name, level, image, rarity, isShiny) {
    super(level);

    this.name = 'Justice';
    this.image = 'https://i.imgur.com/NTItTrO.gif';
    this.shinyImage = 'https://i.imgur.com/NTItTrO.gif';
    this.rarity = 3;
    this.isShiny = false;
  }
}
