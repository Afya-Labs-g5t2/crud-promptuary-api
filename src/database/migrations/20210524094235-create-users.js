'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
     await queryInterface.createTable('users', { 
       id: {
         type: Sequelize.INTEGER,
         primaryKey: true,
         autoIncrement: true,
         allowNull:false,
       },
       name: {
         type: Sequelize.STRING,
         allowNeull:false,
       },
       email:{
         type: Sequelize.STRING,         
         allowNeull:false,
       },
       created_at: {
         type:Sequelize.DATE,
         allowNeull:false,
       },
       updated_at: {
        type:Sequelize.DATE,
        allowNeull:false,
      },
      });
     
  },

  down: async (queryInterface, Sequelize) => {
    
     await queryInterface.dropTable('users');
     
  }
};
