const Monster = require('../base/monster');

module.exports = class Lakutoid extends Monster {
  constructor(name, level, image, rarity, isShiny) {
    super(level);

    this.name = 'Lakutoid'
    this.image = 'https://i.imgur.com/ZYpdkno.png';
    this.shinyImage = 'https://i.imgur.com/UlEZpJ4.png';
    this.rarity = 1;
    this.isShiny = false;
  }
}