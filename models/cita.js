'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cita extends Model {
 
    associate(models) {
      this.belongsTo(models.User);
    }
  };
  Cita.init({
    idUser: DataTypes.INTEGER,
    fechaCita: DataTypes.DATE,
    horaCita: DataTypes.STRING,
    servicio: DataTypes.STRING,
    status: DataTypes.STRING,
    sala: DataTypes.STRING,
    precio: DataTypes.INTEGER,
    concluida: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Cita',
  });
  return Cita;
};