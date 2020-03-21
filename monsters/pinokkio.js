const Monster = require('../base/monster');

module.exports = class Pinokkio extends Monster {
  constructor(name, level, image, rarity, isShiny) {
    super(level);

    this.name = 'Pinokkio'
    this.image = 'https://cdn.discordapp.com/attachments/689819288210505806/690160061347135565/pinokkio.png';
    this.shinyImage = 'https://cdn.discordapp.com/attachments/689819288210505806/690160061347135565/pinokkio.png';
    this.rarity = 1;
    this.isShiny = false;
  }
}