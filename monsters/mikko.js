const Monster = require('../base/monster');

module.exports = class Mikko extends Monster {
  constructor(name, level, image, rarity, isShiny) {
    super(level);

    this.name = 'Mikko'
    this.image = 'https://cdn.discordapp.com/attachments/689819288210505806/690640462519730196/enhalua.png';
    this.shinyImage = 'https://cdn.discordapp.com/attachments/689819288210505806/690640462519730196/enhalua.png';
    this.rarity = 2;
    this.isShiny = false;
  }
}