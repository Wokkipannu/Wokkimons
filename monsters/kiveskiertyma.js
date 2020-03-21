const Monster = require('../base/monster');

module.exports = class Kiveskiertyma extends Monster {
  constructor(name, level, image, rarity, isShiny) {
    super(level);

    this.name = 'Kiveskiertymä'
    this.image = 'https://www.terveyskyla.fi/miestalo/PublishingImages/Sukuelin/kiveskiertym%C3%A4_ilmanteksteja.jpg?RenditionID=26';
    this.shinyImage = 'https://www.terveyskyla.fi/miestalo/PublishingImages/Sukuelin/kiveskiertym%C3%A4_ilmanteksteja.jpg?RenditionID=26';
    this.rarity = 2;
    this.isShiny = false;
  }
}