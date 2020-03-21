const Monster = require('../base/monster');

module.exports = class Lakupena extends Monster {
  constructor(name, level, image, rarity, isShiny) {
    super(level);

    this.name = 'Lakupena';
    this.image = 'https://i.imgur.com/rB6PWPo.png';
    this.shinyImage = 'https://i.imgur.com/rB6PWPo.png';
    this.rarity = 1;
    this.isShiny = false;
  }
}
