'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('Mons', 'rarirty', 'rarity');
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('Mons', 'rarity', 'rarirty');
  }
};
