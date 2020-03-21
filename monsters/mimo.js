const Monster = require('../base/monster');

module.exports = class Mimo extends Monster {
  constructor(name, level, image, rarity, isShiny) {
    super(level);

    this.name = 'Mimo'
    this.image = 'https://cdn.discordapp.com/attachments/689819288210505806/689934638243905717/dingo-li.png';
    this.shinyImage = 'https://cdn.discordapp.com/attachments/689819288210505806/689934638243905717/dingo-li.png';
    this.rarity = 1;
    this.isShiny = false;
  }
}