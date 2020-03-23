'use strict';
module.exports = (sequelize, DataTypes) => {
  const Monster = sequelize.define('Monster', {
    monsterId: DataTypes.INTEGER,
    PlayerId: DataTypes.INTEGER,
    level: DataTypes.INTEGER,
    isShiny: DataTypes.INTEGER
  }, {});
  Monster.associate = function(models) {
    // associations can be defined here
    Monster.belongsTo(models.Player);
  };
  return Monster;
};