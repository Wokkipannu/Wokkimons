const models = require('../database/models');

class MonsterController {
  static async createMonster(monster) {
    try {
      const mon = await models.Monster.create(monster, {
        include: models.Mon
      });
      return mon;
    }
    catch(error) {
      return error;
    }
  }

  static async getMonster(monsterId) {
    try {
      const monster = await models.Monster.findOne({
        where: { id: monsterId },
        include: models.Mon
      });
      if (monster) return monster;
      else return false;
    }
    catch(error) {
      return error;
    }
  }

  static async getAllMonsters() {
    try {
      const monsters = await models.Monster.findAll();
      return monsters;
    }
    catch(error) {
      return error;
    }
  }

  static async deleteMonster(monsterId) {
    try {
      const monster = await models.Monster.destroy({
        where: { id: monsterId }
      });
      return monster;
    }
    catch(error) {
      return error;
    }
  }

  static async updateMonster(monsterId, playerId) {
    try {
      const monster = await models.Monster.update({ PlayerId: playerId}, {
        where: { id: monsterId }
      });
      return monster;
    }
    catch(error) {
      return error;
    }
  }
}

module.exports = MonsterController;