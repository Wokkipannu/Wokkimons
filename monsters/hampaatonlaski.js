const Monster = require('../base/monster');

module.exports = class Hampaatonlaski extends Monster {
  constructor(name, level, image, rarity, isShiny) {
    super(level);

    this.name = 'Hampaatonläski'
    this.image = 'https://cdn.discordapp.com/attachments/655224789996404792/663538187288838166/unknown.png';
    this.shinyImage = 'https://cdn.discordapp.com/attachments/655224789996404792/663538187288838166/unknown.png';
    this.rarity = 2;
    this.isShiny = false;
  }
}