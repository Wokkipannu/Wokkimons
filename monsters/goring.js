const Monster = require('../base/monster');

module.exports = class Goring extends Monster {
  constructor(name, level, image, rarity, isShiny) {
    super(level);

    this.name = 'Göring'
    this.image = 'https://i.imgur.com/QnkB97h.png';
    this.shinyImage = 'https://i.imgur.com/QnkB97h.png';
    this.rarity = 2;
    this.isShiny = false;
  }
}