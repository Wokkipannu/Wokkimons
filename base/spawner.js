const Utils = require('../utils/utils');
const MonController = require('../controllers/MonController');
const winston = require('../utils/logger');

module.exports = class Spawner {
  constructor(dispatcher, serverId, channelId) {
    this.dispatcher = dispatcher;
    this.serverId = serverId;
    this.channelId = channelId;
    this.spawner;
    this.status = false;
    this.min = parseInt(process.env.SPAWNER_INTERVAL.split("-")[0]) * 60000 || 300000;
    this.max = parseInt(process.env.SPAWNER_INTERVAL.split("-")[1]) * 60000 || 1800000;
    this.timer = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  }

  start() {
    winston.info(`Monster spawner started on server ${this.serverId} with ${this.timer / 60000} minutes interval`);
    this.status = true;
    this.spawner = setInterval(async () => {
      const isShiny = this.rollShiny();
      const rarity = this.randomizeRarity();

      winston.info(`Spawning monster...`);
      winston.info(`Shiny status: ${isShiny}`);
      winston.info(`Rarity: ${rarity}`);

      let mons = await MonController.getAllMons();
      let monsters = mons.filter(m => m.rarity === this.rarity);
      let monster = monsters[Math.floor(Math.random() * monsters.length)];
      monster.level = Utils.getLevel();
      monster.isShiny = this.isShiny;

      winston.info(`Spawning level ${monster.level} ${monster.name} on server ${this.serverId}. Spawn took ${this.timer / 60000} minutes.`);
      this.dispatcher.dispatch('spawn', { monster: monster, serverId: this.serverId, channelId: this.channelId });
      this.timer = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
      this.stop();
      this.start();
    }, this.timer);
  }

  stop() {
    this.status = false;
    clearInterval(this.spawner);
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