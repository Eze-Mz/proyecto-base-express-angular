const { sequelize } = require('../config/db-config.js');
const { DataTypes } = require('sequelize');

const { createPassword } = require('../helpers/passwords.js');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isAlpha: {
        msg: 'El nombre solo puede contener letras'
      },
      len: {
        args: [2, 255],
        msg: 'El nombre tiene que ser minimamente de dos caracters'
      }
    }
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isAlpha: {
        msg: 'El nombre solo puede contener letras'
      },
      len: {
        args: [2, 255],
        msg: 'El nombre tiene que ser minimamente de dos caracters'
      }
    }
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
  },
  RoleId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

module.exports = User;
