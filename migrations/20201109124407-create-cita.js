'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Cita', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idUser: {
        type: Sequelize.INTEGER
      },
      fechaCita: {
        type: Sequelize.DATE
      },
      horaCita: {
        type: Sequelize.STRING
      },
      servicio: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      sala: {
        type: Sequelize.STRING
      },
      precio: {
        type: Sequelize.INTEGER
      },
      concluida: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Cita');
  }
};