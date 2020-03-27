'use strict';
module.exports = (sequelize, DataTypes) => {
  const Monster = sequelize.define('Monster', {
    MonId: DataTypes.INTEGER,
    PlayerId: DataTypes.INTEGER,
    level: DataTypes.INTEGER,
    isShiny: DataTypes.INTEGER
  }, {});
  Monster.associate = function(models) {
    // associations can be defined here
    Monster.belongsTo(models.Player);
    Monster.belongsTo(models.Mon);
  };
  return Monster;
};