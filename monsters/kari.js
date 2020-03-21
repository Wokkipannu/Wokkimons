const Monster = require('../base/monster');

module.exports = class Kari extends Monster {
  constructor(name, level, image, rarity, isShiny) {
    super(level);

    this.name = 'Kari'
    this.image = 'https://cdn.discordapp.com/attachments/689819288210505806/690174239654936628/latest.png';
    this.shinyImage = 'https://cdn.discordapp.com/attachments/689819288210505806/690174282822844507/a4230ec62a4d9dbd85af4decf1dff19e5dc6373e_full.png';
    this.rarity = 1;
    this.isShiny = false;
  }
}