const Monster = require('../base/monster');

module.exports = class NiggerRacer extends Monster {
  constructor(name, level, image, rarity, isShiny) {
    super(level);

    this.name = 'Nigger Racer'
    this.image = 'https://cdn.discordapp.com/attachments/534773820091793411/690623276527124480/unknown.png';
    this.shinyImage = 'https://cdn.discordapp.com/attachments/534773820091793411/690623276527124480/unknown.png';
    this.rarity = 2;
    this.isShiny = false;
  }
}