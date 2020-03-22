const Monster = require('../base/monster');

module.exports = class Tallahasseessahallat extends Monster {
  constructor(name, level, image, rarity, isShiny) {
    super(level);

    this.name = 'Tallahasseessahallat'
    this.image = 'https://i.imgur.com/Q7YkWg8.gif';
    this.shinyImage = 'https://i.imgur.com/Q7YkWg8.gif';
    this.rarity = 3;
    this.isShiny = false;
  }
}