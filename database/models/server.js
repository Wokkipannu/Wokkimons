'use strict';
module.exports = (sequelize, DataTypes) => {
  const Server = sequelize.define('Server', {
    serverId: DataTypes.STRING,
    spawnChannel: DataTypes.STRING,
    spawnerStatus: DataTypes.INTEGER
  }, {});
  Server.associate = function(models) {
    // associations can be defined here
  };
  return Server;
};