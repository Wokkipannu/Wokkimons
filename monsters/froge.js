const Monster = require('../base/monster');

module.exports = class Froge extends Monster {
  constructor(name, level, image, rarity, isShiny) {
    super(level);

    this.name = 'Pet Froge'
    this.image = 'https://media.discordapp.net/attachments/381520882608373761/685898770478661686/froggi.gif';
    this.shinyImage = 'https://media.discordapp.net/attachments/381520882608373761/685898770478661686/froggi.gif';
    this.rarity = 3;
    this.isShiny = false;
  }
}