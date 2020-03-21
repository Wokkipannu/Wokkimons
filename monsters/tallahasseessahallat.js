const Monster = require('../base/monster');

module.exports = class Tallahasseessahallat extends Monster {
  constructor(name, level, image, rarity, isShiny) {
    super(level);

    this.name = 'Tallahasseessahallat'
    this.image = 'https://cdn.discordapp.com/attachments/534773820091793411/690910219844190228/tallalumi.gif';
    this.shinyImage = 'https://cdn.discordapp.com/attachments/534773820091793411/690910219844190228/tallalumi.gif';
    this.rarity = 3;
    this.isShiny = false;
  }
}