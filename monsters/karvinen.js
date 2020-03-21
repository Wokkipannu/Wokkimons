const Monster = require('../base/monster');

module.exports = class Karvinen extends Monster {
  constructor(name, level, image, rarity, isShiny) {
    super(level);

    this.name = 'Karvinen'
    this.image = 'https://cdn.discordapp.com/attachments/534773820091793411/690910734183563354/Discord_wmb35EdQaV.png';
    this.shinyImage = 'https://cdn.discordapp.com/attachments/534773820091793411/690910734183563354/Discord_wmb35EdQaV.png';
    this.rarity = 1;
    this.isShiny = false;
  }
}