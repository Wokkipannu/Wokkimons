const Monster = require('../base/monster');

module.exports = class Murina extends Monster {
  constructor(name, level, image, rarity, isShiny) {
    super(level);

    this.name = 'Murina'
    this.image = 'https://cdn.discordapp.com/attachments/689819288210505806/690214586561069118/murinakarhu.png';
    this.shinyImage = 'https://cdn.discordapp.com/attachments/689819288210505806/690214586561069118/murinakarhu.png';
    this.rarity = 1;
    this.isShiny = false;
  }
}