'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('Monsters', 'monsterId', 'MonId');
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('Monsters', 'MonId', 'monsterId');
  }
};
