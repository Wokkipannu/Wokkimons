module.exports = class Monster {
  constructor(name, level, image, rarity, isShiny) {
    this.name = name;
    this.level = level;
    this.image = image;
    this.rarity = rarity;
    this.isShiny = isShiny;
  }

  getName () {
    return this.name;
  }

  getLevel() {
    return this.level;
  }

  getImage() {
    return this.image;
  }

  getRarity() {
    return this.rarity;
  }
}