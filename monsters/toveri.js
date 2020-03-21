const Monster = require('../base/monster');

module.exports = class Toveri extends Monster {
  constructor(name, level, image, rarity, isShiny) {
    super(level);

    this.name = 'Toveri'
    this.image = 'https://cdn.discordapp.com/attachments/689819288210505806/689849784999215132/neekeri.png';
    this.shinyImage = 'https://cdn.discordapp.com/attachments/689819288210505806/689849784999215132/neekeri.png';
    this.rarity = 1;
    this.isShiny = false;
  }
}