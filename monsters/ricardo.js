const Monster = require('../base/monster');

module.exports = class Ricardo extends Monster {
  constructor(name, level, image, rarity, isShiny) {
    super(level);

    this.name = 'Ricardo'
    this.image = 'https://i.imgur.com/PhrGRGL.gif';
    this.shinyImage = 'https://i.imgur.com/PhrGRGL.gif';
    this.rarity = 3;
    this.isShiny = false;
  }
}