const Monster = require('../base/monster');

module.exports = class Niglet extends Monster {
  constructor(name, level, image, rarity, isShiny) {
    super(level);

    this.name = 'Niglet'
    this.image = 'https://i.imgur.com/TkQiFdM.png';
    this.shinyImage = 'https://i.imgur.com/TkQiFdM.png';
    this.rarity = 1;
    this.isShiny = false;
  }
}