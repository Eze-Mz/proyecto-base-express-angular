const { sequelize } = require('../config/db-config.js');
const { DataTypes } = require('sequelize');
const User = require('./user.js');

const Survey = sequelize.define('Survey', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  state: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  }
}, {
  paranoid: true
});

Survey.belongsTo(User);
User.hasMany(Survey);

User.hasMany(Survey, { foreignKey: 'updateUser' });

module.exports = Survey;
