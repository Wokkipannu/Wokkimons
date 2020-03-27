const Monsters = require('../utils/monsters');
const MonController = require('../controllers/MonController');
const winston = require('../utils/logger');

module.exports = class Spawner {
  constructor(dispatcher, serverId, channelId) {
    this.spawner;
    this.monster;
    this.dispatcher = dispatcher;
    this.timer = Math.floor(Math.random() * (1800000 - 300000 + 1) + 300000);
    this.rarity;
    this.isShiny;
    this.serverId = serverId;
    this.channelId = channelId;
    this.status;
  }

  start() {
    winston.info(`Monster spawner started on server ${this.serverId} with ${this.timer / 60000} minutes interval`);
    this.status = true;
    this.spawner = setInterval(async () => {
      this.isShiny = this.rollShiny();
      this.rarity = this.randomizeRarity();

      winston.info(`Spawning monster...`);
      winston.info(`Shiny status: ${this.isShiny}`);
      winston.info(`Rarity: ${this.rarity}`);

      let mons = await MonController.getAllMons();
      let monsters = mons.filter(m => m.rarity === this.rarity);
      this.monster = monsters[Math.floor(Math.random() * monsters.length)];
      this.monster.level = Monsters.getLevel();
      this.monster.isShiny = this.isShiny;

      winston.info(`Spawning level ${this.monster.level} ${this.monster.name} on server ${this.serverId}. Spawn took ${this.timer / 60000} minutes.`);
      this.dispatcher.dispatch('spawn', { monster: this.monster, serverId: this.serverId, channelId: this.channelId });
      this.timer = Math.floor(Math.random() * (1800000 - 300000 + 1) + 300000);
      this.stop();
      this.start();
    }, this.timer);
  }

  stop() {
    this.status = false;
    clearInterval(this.spawner);
  }

  getStatus() {
    return this.status;
  }

  randomizeRarity() {
    const rarity = Math.floor(Math.random() * (20 - 1 + 1) + 1);
    winston.info(`Rolled ${rarity}`);
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

  rollShiny() {
    let die = Math.floor(Math.random() * (50 - 1 + 1) + 1);
    if (die === 50) return 1;
    else return 0;
  }
}