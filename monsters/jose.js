const Monster = require('../base/monster');

module.exports = class Jose extends Monster {
  constructor(name, level, image, rarity, isShiny) {
    super(level);

    this.name = 'Jose'
    this.image = 'https://cdn.discordapp.com/emojis/662470951795032077.png?v=1';
    this.shinyImage = 'https://cdn.discordapp.com/emojis/673643922953863204.png?v=1';
    this.rarity = 1;
    this.isShiny = false;
  }
}