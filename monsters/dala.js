const Monster = require('../base/monster');

module.exports = class Dala extends Monster {
  constructor(name, level, image, rarity, isShiny) {
    super(level);

    this.name = 'Dala'
    this.image = 'https://i.imgur.com/JPaJiqy.gif';
    this.shinyImage = 'https://i.imgur.com/JPaJiqy.gif';
    this.rarity = 3;
    this.isShiny = false;
  }
}