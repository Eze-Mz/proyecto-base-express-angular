const { sequelize } = require('../config/db-config.js');
const { DataTypes } = require('sequelize');

const { createPassword } = require('../helpers/passwords.js');

const User = sequelize.define('Users', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    set (value) {
      this.setDataValue('password', createPassword(value));
    }
  }
});

module.exports = User;
