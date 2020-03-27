const models = require('../database/models');

class LogController {
  static async log(serverId, message) {
    try {
      const log = await models.Log.create({ serverId: serverId, message: message });
      return log;
    }
    catch(error) {
      return error;
    }
  }

  static async getLogs(offset, limit) {
    try {
      const logs = await models.Log.findAll({
        order: [
          {'id': 'DESC'}
        ],
        offset: offset,
        limit: limit
      });
      return logs;
    }
    catch(error) {
      return error;
    }
  }

  static async getLogsByServer(serverId, offset, limit) {
    try {
      const logs = await models.Log.find({
        where: { serverId: serverId },
        order: [
          {'id': 'DESC'}
        ],
        offset: offset,
        limit: limit
      });
      return logs;
    }
    catch(error) {
      return error;
    }
  }
}

module.exports = LogController;