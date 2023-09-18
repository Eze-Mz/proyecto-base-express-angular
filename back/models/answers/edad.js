const { sequelize } = require('../../config/db-config.js');
const { DataTypes } = require('sequelize');

const Edad = sequelize.define('Edad', {
  edad: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
    validate: {
      isNumeric: true,
      min: 0,
      max: 200
    }
  }
}, {
  freezeTableName: true
});
module.exports = Edad;
