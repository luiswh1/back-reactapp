'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {   
      await queryInterface.createSchema('curriculo', { 
       
      });
     
  },

  down: async (queryInterface, Sequelize) => {
  await queryInterface.dropSchema('curriculo');
     
  }
};
