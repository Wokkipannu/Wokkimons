const Monster = require('../base/monster');

module.exports = class Jose extends Monster {
  constructor(name, level, image, rarity, isShiny) {
    super(level);

    this.name = 'Hjallis'
    this.image = 'https://cdn.discordapp.com/emojis/658143852439535627.png?v=1';
    this.shinyImage = 'https://cdn.discordapp.com/emojis/658143852439535627.png?v=1';
    this.rarity = 1;
    this.isShiny = false;
  }
}