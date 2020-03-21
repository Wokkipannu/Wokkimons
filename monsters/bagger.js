const Monster = require('../base/monster');

module.exports = class Bagger extends Monster {
  constructor(name, level, image, rarity, isShiny) {
    super(level);

    this.name = 'Bagger'
    this.image = 'https://cdn.discordapp.com/attachments/689819288210505806/690157102588493840/bagger.png';
    this.shinyImage = 'https://cdn.discordapp.com/attachments/689819288210505806/690157102588493840/bagger.png';
    this.rarity = 1;
    this.isShiny = false;
  }
}