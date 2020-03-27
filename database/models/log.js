'use strict';
module.exports = (sequelize, DataTypes) => {
  const Log = sequelize.define('Log', {
    serverId: DataTypes.STRING,
    message: DataTypes.TEXT
  }, {});
  Log.associate = function(models) {
    // associations can be defined here
  };
  return Log;
};