const monsters = require('../monsters');

module.exports = class Spawner {
  constructor(dispatcher) {
    this.spawner;
    this.monster;
    this.dispatcher = dispatcher;
    this.timer = Math.floor(Math.random() * (1800000 - 300000 + 1) + 300000);
    this.rarity;
    this.isShiny;
  }

  start() {
    console.log(`Monster spawner started with ${this.timer / 60000} minutes interval`);
    this.spawner = setInterval(() => {
      this.monster = new monsters[Object.keys(monsters)[Math.floor(Math.random() * Object.keys(monsters).length)]];
      this.monster.level = Math.floor(Math.random() * 100);

      console.log(`Trying to spawn monster with rarity ${this.monster.rarity}`)

      this.isShiny = this.rollShiny();
      console.log(`Shiny status: ${this.isShiny}`);

      this.rarity = this.randomizeRarity();
      console.log(`Rolled rarity ${this.rarity}`);
      if (this.monster.rarity === this.rarity) {
        console.log(`Monster is of valid rarity`);
        this.dispatcher.dispatch('spawn', this.monster);
        console.log(`Monster spawn took ${this.timer / 60000} minutes`);
        this.timer = Math.floor(Math.random() * (1800000 - 300000 + 1) + 300000);
        console.log(`Next monster spawn in ${this.timer / 60000} minutes`);
        this.stop();
        this.start();
      }
      else {
        console.log(`Rerolling because of invalid rarity`);
        this.rerollMonster();
      }
    }, this.timer);
  }

  stop() {
    clearInterval(this.spawner);
  }

  randomizeRarity() {
    const rarity = Math.floor(Math.random() * (20 - 1 + 1) + 1);
    console.log(`Rolled ${rarity}`);
    if (rarity >= 0 && rarity <= 13) {
      // Common
      return 1;
    }
    else if (rarity >= 14 && rarity <= 19) {
      // Uncommon
      return 2;
    }
    else if (rarity === 20) {
      // Rare
      return 3;
    }
  }

  rerollMonster() {
    console.log(`Rerolling monster...`)
    this.monster = new monsters[Object.keys(monsters)[Math.floor(Math.random() * Object.keys(monsters).length)]];
    this.monster.level = Math.floor(Math.random() * 100);
    this.attemptRespawn();
  }

  attemptRespawn() {
    console.log(`Attemping respawn`);
    if (this.monster.rarity === this.rarity) {
      console.log(`Rarity matches now`);
      this.dispatcher.dispatch('spawn', this.monster);
      console.log(`Monster spawn took ${this.timer / 60000} minutes`);
      this.timer = Math.floor(Math.random() * (1800000 - 300000 + 1) + 300000);
      console.log(`Next monster spawn in ${this.timer / 60000} minutes`);
      this.stop();
      this.start();
    }
    else {
      console.log(`Rarity does not match. Rerolling`);
      this.rerollMonster();
    }
  }

  rollShiny() {
    let die = Math.floor(Math.random() * 100);
    if (die === 100) return true;
    else return false;
  }
}