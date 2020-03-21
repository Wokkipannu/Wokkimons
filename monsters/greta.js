const Monster = require('../base/monster');

module.exports = class Greta extends Monster {
  constructor(name, level, image, rarity, isShiny) {
    super(level);

    this.name = 'Greta'
    this.image = 'https://cdn.discordapp.com/emojis/660554164224655372.png?v=1';
    this.shinyImage = 'https://cdn.discordapp.com/emojis/660553448764473364.png?v=1';
    this.rarity = 1;
    this.isShiny = false;
  }
}