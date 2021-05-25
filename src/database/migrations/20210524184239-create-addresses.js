'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
     await queryInterface.createTable('addresses', { 
       id: {
         type: Sequelize.INTEGER,
         primaryKey: true,
         autoIncrement: true,
         allowNull: false,
       },
       user_id: {
         type: Sequelize.INTEGER,         
         allowNull: false,
         references: { model: 'users', key:'id'},
         onUpdate: 'CASCADE',
         onDelete: 'CASCADE', //SET NULL    RESTRICT        CASCADE
       },
       zipcode: {
         type: Sequelize.STRING,
         allowNeull: false,
       },
       street:{
         type: Sequelize.STRING,         
         allowNeull: false,
       },
       number:{
         type: Sequelize.INTEGER,         
         allowNeull: false,
       },
       created_at: {
         type: Sequelize.DATE,
         allowNeull: false,
       },
       updated_at: {
        type: Sequelize.DATE,
        allowNeull: false,
      },
      });
     
  },

  down: async (queryInterface, Sequelize) => {
    
     await queryInterface.dropTable('addresses');
     
  }
};
