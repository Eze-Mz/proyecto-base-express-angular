// crear modeolo de respuestas de sexo las respuesta es un enum con masuculino y femenino
const { sequelize } = require('../../config/db-config.js');
const { DataTypes } = require('sequelize');

const Sexo = sequelize.define('Sexo', {
  sexo: {
    type: DataTypes.ENUM('masculino', 'femenino'),
    allowNull: false,
    validate: {
      isIn: [['masculino', 'femenino']]
    }
  }
}, {
  freezeTableName: true,
  paranoid: true
});
module.exports = Sexo;
