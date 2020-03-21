const Monster = require('../base/monster');

module.exports = class Wokki extends Monster {
  constructor(name, level, image, rarity, isShiny) {
    super(level);

    this.name = 'Wokki'
    this.image = 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/46/46a60f126209460db6912b54da7ab2773e844807_full.jpg';
    this.shinyImage = 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/46/46a60f126209460db6912b54da7ab2773e844807_full.jpg';
    this.rarity = 1;
    this.isShiny = false;
  }
}