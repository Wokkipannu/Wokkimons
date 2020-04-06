const Monsters = require('../utils/monsters');
const MonController = require('../controllers/MonController');
const winston = require('../utils/logger');

module.exports = class Spawner {
  constructor(dispatcher, serverId, channelId) {
    this.spawner;
    this.monster;
    this.rarity;
    this.isShiny;
    this.status;
    this.min;
    this.max;
    this.dispatcher = dispatcher;
    this.serverId = serverId;
    this.channelId = channelId;
    this.timer;
  }

  init() {
    const spawnerInterval = process.env.SPAWNER_INTERVAL.split("-");
    this.min = parseInt(spawnerInterval[0]) * 60000;
    this.max = parseInt(spawnerInterval[1]) * 60000;

    if (!Number.isInteger(this.min) || !Number.isInteger(this.max) || this.min >= this.max || this.min < 1 || this.max < 2) {
      this.initDefault();
    }

    this.timer = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  }

  initDefault() {
    winston.error('Invalid SPAWNER_INTERVAL environment value. Expected value is min-max, example 5-30. Using default value instead.');
    this.min = 300000;
    this.max = 1800000;
    this.timer = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
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
      this.timer = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
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