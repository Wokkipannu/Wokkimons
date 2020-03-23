'use strict';
module.exports = (sequelize, DataTypes) => {
  const Player = sequelize.define('Player', {
    userId: DataTypes.STRING,
    color: DataTypes.STRING
  }, {});
  Player.associate = function(models) {
    // associations can be defined here
    Player.hasMany(models.Monster, {
      foreignKey: 'PlayerId',
      as: 'monsters',
      onDelete: 'CASCADE'
    });
  };
  return Player;
};