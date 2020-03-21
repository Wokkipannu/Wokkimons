const Monster = require('../base/monster');

module.exports = class Polysokeri extends Monster {
  constructor(name, level, image, rarity, isShiny) {
    super(level);

    this.name = 'Pölysokerikakku'
    this.image = 'https://i.pinimg.com/originals/41/24/16/412416f0fd854693a0ca4cce03d3ff12.gif';
    this.shinyImage = 'https://i.pinimg.com/originals/41/24/16/412416f0fd854693a0ca4cce03d3ff12.gif';
    this.rarity = 3;
    this.isShiny = false;
  }
}