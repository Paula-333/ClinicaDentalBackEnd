'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    
    static associate(models) {
      this.hasMany(models.Cita);
    }
  };
  User.init({
    nombre: DataTypes.STRING,
    apellidos: DataTypes.STRING,
    nacimiento: DataTypes.DATE,
    telefono: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    dni: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};