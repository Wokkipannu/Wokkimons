'use strict';
module.exports = (sequelize, DataTypes) => {
  const Mon = sequelize.define('Mon', {
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    shinyImage: DataTypes.STRING,
    rarity: DataTypes.INTEGER,
    memberName: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {});
  Mon.associate = function(models) {
    // associations can be defined here
    Mon.hasMany(models.Monster, {
      foreignKey: 'MonId',
      as: 'monster'
    });
  };
  return Mon;
};