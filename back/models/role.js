const { sequelize } = require('../config/db-config.js');
const { DataTypes } = require('sequelize');
const User = require('../models/user.js');

const Role = sequelize.define('Role', {
  roleName: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
});
Role.hasMany(User);
User.belongsTo(Role);
module.exports = Role;
