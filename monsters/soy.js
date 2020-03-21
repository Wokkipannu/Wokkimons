const Monster = require('../base/monster');

module.exports = class Soy extends Monster {
  constructor(name, level, image, rarity, isShiny) {
    super(level);

    this.name = 'Soy'
    this.image = 'https://cdn.discordapp.com/attachments/655224789996404792/690314283074191488/soy.png';
    this.shinyImage = 'https://cdn.discordapp.com/attachments/655224789996404792/690314283074191488/soy.png';
    this.rarity = 1;
    this.isShiny = false;
  }
}