const Monster = require('../base/monster');

module.exports = class Goring extends Monster {
  constructor(name, level, image, rarity, isShiny) {
    super(level);

    this.name = 'Göring'
    this.image = 'https://cdn.discordapp.com/attachments/689819288210505806/689934550985474070/laski.png';
    this.shinyImage = 'https://cdn.discordapp.com/attachments/689819288210505806/689934550985474070/laski.png';
    this.rarity = 2;
    this.isShiny = false;
  }
}