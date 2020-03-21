const Monster = require('../base/monster');

module.exports = class Dala extends Monster {
  constructor(name, level, image, rarity, isShiny) {
    super(level);

    this.name = 'Dala'
    this.image = 'https://media.discordapp.net/attachments/446048227721084970/670441661305978920/BathTime.gif';
    this.shinyImage = 'https://media.discordapp.net/attachments/446048227721084970/670441661305978920/BathTime.gif';
    this.rarity = 3;
    this.isShiny = false;
  }
}