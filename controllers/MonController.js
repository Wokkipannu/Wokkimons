const models = require('../database/models');

class MonsController {
  static async getMon(monId) {
    try {
      const mon = await models.Mon.findOne({
        where: { id: monId }
      });
      return mon;
    }
    catch(error) {
      return error;
    }
  }

  static async getMonByName(name) {
    try {
      const mon = await models.Mon.findOne({
        where: { name: name }
      });
      return mon;
    }
    catch(error) {
      return error;
    }
  }

  static async getAllMons() {
    try {
      const mons = await models.Mon.findAll();
      return mons;
    }
    catch(error) {
      return error;
    }
  }

  static async getMonsByRarity(rarity) {
    try {
      const monsters = await models.Mon.findAll({
        where: { rarity: rarity }
      });
      return monsters;
    }
    catch(error) {
      return error;
    }
  }

  static async createMon(mon) {
    try {
      const newMon = await models.Mon.create(mon);
      return newMon;
    }
    catch(error) {
      return error;
    }
  }

  static async createMons(mons) {
    try {
      const newMons = await models.Mon.bulkCreate(mons);
      return newMons;
    }
    catch(error) {
      return error;
    }
  }
}

module.exports = MonsController;