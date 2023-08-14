const { sequelize } = require('../config/db-config.js');
const { DataTypes } = require('sequelize');

const User = sequelize.define('Users', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  role: {
    type: DataTypes.STRING,
    defaultValue: 'USER'
  }
});

module.exports = User;
