const Monster = require('../base/monster');

module.exports = class Grilli extends Monster {
  constructor(name, level, image, rarity, isShiny) {
    super(level);

    this.name = 'Grilli'
    this.image = 'https://cdn.discordapp.com/emojis/660816595937132553.png?v=1';
    this.shinyImage = 'https://cdn.discordapp.com/emojis/660816595937132553.png?v=1';
    this.rarity = 1;
    this.isShiny = false;
  }
}