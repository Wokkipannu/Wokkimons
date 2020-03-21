const Monster = require('../base/monster');

module.exports = class Niglet extends Monster {
  constructor(name, level, image, rarity, isShiny) {
    super(level);

    this.name = 'Niglet'
    this.image = 'https://cdn.discordapp.com/attachments/689819288210505806/690634630298075136/unknown.png';
    this.shinyImage = 'https://cdn.discordapp.com/attachments/689819288210505806/690634630298075136/unknown.png';
    this.rarity = 1;
    this.isShiny = false;
  }
}