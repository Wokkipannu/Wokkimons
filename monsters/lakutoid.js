const Monster = require('../base/monster');

module.exports = class Lakutoid extends Monster {
  constructor(name, level, image, rarity, isShiny) {
    super(level);

    this.name = 'Lakutoid'
    this.image = 'https://cdn.discordapp.com/emojis/657297879861428269.png?v=1';
    this.shinyImage = 'https://cdn.discordapp.com/emojis/690519849398435840.png?v=1';
    this.rarity = 1;
    this.isShiny = false;
  }
}