const Monster = require('../base/monster');

module.exports = class Pupu15 extends Monster {
  constructor(name, level, image, rarity, isShiny) {
    super(level);

    this.name = 'Pupu15'
    this.image = 'https://cdn.discordapp.com/attachments/534773820091793411/690907812913741854/pupu15.png';
    this.shinyImage = 'https://cdn.discordapp.com/attachments/534773820091793411/690907812913741854/pupu15.png';
    this.rarity = 2;
    this.isShiny = false;
  }
}