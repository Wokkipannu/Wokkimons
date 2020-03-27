'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.addColumn('Servers', 'spawnerStatus', Sequelize.INTEGER);
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.removeColumn('Servers', 'spawnerStatus');
  }
};
