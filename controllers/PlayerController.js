const models = require('../database/models');

class PlayerController {
  static async createPlayer(playerId) {
    try {
      const player = await models.Player.create({ userId: playerId });
      return player;
    }
    catch(error) {
      return error
    }
  }

  static async getPlayer(playerId) {
    try {
      const player = await models.Player.findOne({
        where: { userId: playerId },
        include: [
          {
            model: models.Monster,
            as: 'monsters',
            include: [
              {
                model: models.Mon
              }
            ]
          }
        ]
      });
      if (player) return player;
      else return false;
    }
    catch(error) {
      return error
    }
  }

  static async getAllPlayers() {
    try {
      const players = await models.Player.findAll({
        include: [
          {
            model: models.Monster,
            as: 'monsters'
          }
        ]
      });
      return players;
    }
    catch(error) {
      return error;
    }
  }

  static async updatePlayer(player) {
    try {
      const ply = await models.Player.update(player, {
        where: { id: player.id }
      })
      return ply;
    }
    catch(error) {
      return error;
    }
  }
}

module.exports = PlayerController;