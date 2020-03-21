const Monster = require('../base/monster');

module.exports = class Gerhard extends Monster {
  constructor(name, level, image, rarity, isShiny) {
    super(level);

    this.name = 'Gerhard'
    this.image = 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/c1/c1bfba976f71eca53688275bd8b73621b56106d7_full.jpg';
    this.shinyImage = 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/c1/c1bfba976f71eca53688275bd8b73621b56106d7_full.jpg';
    this.rarity = 2;
    this.isShiny = false;
  }
}