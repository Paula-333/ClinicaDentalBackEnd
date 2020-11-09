'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Historial extends Model {
   
    static associate(models) {
      this.belongsTo(models.User);
      
    }
  };
  Historial.init({
    idUser: DataTypes.INTEGER,
    alergias: DataTypes.STRING,
    observaciones: DataTypes.STRING,
    covid: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Historial',
  });
  return Historial;
};