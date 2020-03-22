const Monster = require('../base/monster');

module.exports = class Pepega extends Monster {
  constructor(name, level, image, rarity, isShiny) {
    super(level);

    this.name = 'Pepega'
    this.image = 'https://i.imgur.com/ZnJ2Aj1.gif';
    this.shinyImage = 'https://i.imgur.com/ZnJ2Aj1.gif';
    this.rarity = 3;
    this.isShiny = false;
  }
}