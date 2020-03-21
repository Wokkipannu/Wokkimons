const Monster = require('../base/monster');

module.exports = class Wab extends Monster {
  constructor(name, level, image, rarity, isShiny) {
    super(level);

    this.name = 'Wab';
    this.image = 'https://cdn.discordapp.com/attachments/689819288210505806/689929304968265896/Raccoon.png';
    this.shinyImage = 'https://cdn.discordapp.com/attachments/689819288210505806/689929304968265896/Raccoon.png';
    this.rarity = 1;
    this.isShiny = false;
  }
}