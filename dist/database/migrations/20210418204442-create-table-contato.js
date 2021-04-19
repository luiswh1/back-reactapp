"use strict";'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.createTable('contatos', {
     id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
  },
  name: {
      type: Sequelize.STRING(100),
      allowNull: false
  },
  email: {
      type: Sequelize.STRING(100),
      allowNull: false
  },
  telefone: {
      type: Sequelize.STRING(100),
      allowNull: false
  },
  created_at: {
      type: Sequelize.DATE,
      allowNull: false
  },
}, {
  schema: 'curriculo',
  tableName: 'contatos'
});

  },
  
  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable({
       schema: 'curriculo',
       tableName: 'contatos'
     });
     
  }
};
