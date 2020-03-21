const Monster = require('../base/monster');

module.exports = class Chitti extends Monster {
  constructor(name, level, image, rarity, isShiny) {
    super(level);

    this.name = 'Chitti'
    this.image = 'https://cdn.discordapp.com/attachments/534773820091793411/690699031453630544/chitti.png';
    this.shinyImage = 'https://cdn.discordapp.com/attachments/534773820091793411/690699031453630544/chitti.png';
    this.rarity = 2;
    this.isShiny = false;
  }
}