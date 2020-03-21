const Monster = require('../base/monster');

module.exports = class Kolmioukko extends Monster {
  constructor(name, level, image, rarity, isShiny) {
    super(level);

    this.name = 'Kolmioukko'
    this.image = 'https://cdn.discordapp.com/attachments/534773820091793411/690902362562363392/kolmioukko.gif';
    this.shinyImage = 'https://cdn.discordapp.com/attachments/534773820091793411/690902362562363392/kolmioukko.gif';
    this.rarity = 3;
    this.isShiny = false;
  }
}