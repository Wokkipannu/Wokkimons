const Monster = require('../base/monster');

module.exports = class Wabuu extends Monster {
  constructor(name, level, image, rarity, isShiny) {
    super(level);

    this.name = 'Wabuu';
    this.image = 'https://cdn.discordapp.com/attachments/689819288210505806/689825272752766983/wabuuCD.png';
    this.shinyImage = 'https://cdn.discordapp.com/attachments/689819288210505806/689825272752766983/wabuuCD.png';
    this.rarity = 2;
    this.isShiny = false;
  }
}