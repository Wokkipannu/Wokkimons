const Monster = require('../base/monster');

module.exports = class Mamu extends Monster {
  constructor(name, level, image, rarity, isShiny) {
    super(level);

    this.name = 'Mamu'
    this.image = 'https://cdn.discordapp.com/attachments/689819288210505806/689935381008875612/mamu.png';
    this.shinyImage = 'https://cdn.discordapp.com/attachments/689819288210505806/689935381008875612/mamu.png';
    this.rarity = 2;
    this.isShiny = false;
  }
}