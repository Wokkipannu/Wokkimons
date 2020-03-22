const Monster = require('../base/monster');

module.exports = class Jose extends Monster {
  constructor(name, level, image, rarity, isShiny) {
    super(level);

    this.name = 'Jose'
    this.image = 'https://i.imgur.com/9XteHON.png';
    this.shinyImage = 'https://i.imgur.com/0E3IU0K.png';
    this.rarity = 1;
    this.isShiny = false;
  }
}