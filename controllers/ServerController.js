const models = require('../database/models');

class ServerController {
  static async createServer(serverId) {
    try {
      const server = await models.Server.create({ serverId: serverId });
      return server;
    }
    catch(error) {
      return error
    }
  }

  static async getServer(serverId) {
    try {
      const server = await models.Server.findOne({
        where: { serverId: serverId }
      });
      if (server) return server;
      else return false;
    }
    catch(error) {
      return error
    }
  }

  static async getAllServers() {
    try {
      const servers = await models.Server.findAll();
      return servers;
    }
    catch(error) {
      return error;
    }
  }
}

module.exports = ServerController;