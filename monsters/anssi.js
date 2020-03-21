const Monster = require('../base/monster');

module.exports = class Anssi extends Monster {
  constructor(name, level, image, rarity, isShiny) {
    super(level);

    this.name = 'Anssi'
    this.image = 'https://vignette.wikia.nocookie.net/sintuubapaska/images/6/64/Anssi.jpg/revision/latest/scale-to-width-down/340?cb=20121030170906';
    this.shinyImage = 'https://vignette.wikia.nocookie.net/sintuubapaska/images/6/64/Anssi.jpg/revision/latest/scale-to-width-down/340?cb=20121030170906';
    this.rarity = 1;
    this.isShiny = false;
  }
}