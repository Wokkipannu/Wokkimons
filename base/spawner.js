const Monsters = require('../monsters/monsters');

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
    console.log(`Monster spawner started on server ${this.serverId} with ${this.timer / 60000} minutes interval`);
    this.status = true;
    this.spawner = setInterval(() => {
      this.isShiny = this.rollShiny();
      this.rarity = this.randomizeRarity();

      console.log(`Spawning monster...`);
      console.log(`Shiny status: ${this.isShiny}`);
      console.log(`Rarity: ${this.rarity}`);

      if (this.rarity === 1) this.monster = Monsters.commonMonsters[Math.floor(Math.random() * Monsters.commonMonsters.length)];
      else if (this.rarity === 2) this.monster = Monsters.uncommonMonsters[Math.floor(Math.random() * Monsters.uncommonMonsters.length)];
      else if (this.rarity === 3) this.monster = Monsters.rareMonsters[Math.floor(Math.random() * Monsters.rareMonsters.length)];
      this.monster.level = Monsters.getLevel();

      console.log(`Spawning level ${this.monster.level} ${this.monster.name}mon on server ${this.serverId}. Spawn took ${this.timer / 60000} minutes.`);
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

  rollShiny() {
    let die = Math.floor(Math.random() * 100);
    if (die === 100) return 1;
    else return 0;
  }
}