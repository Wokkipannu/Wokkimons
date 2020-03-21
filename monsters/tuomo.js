const Monster = require('../base/monster');

module.exports = class Tuomo extends Monster {
  constructor(name, level, image, rarity, isShiny) {
    super(level);

    this.name = 'Tuomo';
    this.image = 'https://cdn.discordapp.com/attachments/689819288210505806/689922552105140248/tuomo.png';
    this.shinyImage = 'https://cdn.discordapp.com/attachments/689819288210505806/689922552105140248/tuomo.png';
    this.rarity = 1;
    this.isShiny = false;
  }
}