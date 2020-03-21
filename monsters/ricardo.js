const Monster = require('../base/monster');

module.exports = class Ricardo extends Monster {
  constructor(name, level, image, rarity, isShiny) {
    super(level);

    this.name = 'Ricardo'
    this.image = 'https://cdn.discordapp.com/attachments/689819288210505806/690909317225775154/ricardo.gif';
    this.shinyImage = 'https://cdn.discordapp.com/attachments/689819288210505806/690909317225775154/ricardo.gif';
    this.rarity = 3;
    this.isShiny = false;
  }
}