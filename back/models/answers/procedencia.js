const { sequelize } = require('../../config/db-config.js');
const { DataTypes } = require('sequelize');

const Procedencia = sequelize.define('Procedencia', {
  procedencia: {
    type: DataTypes.ENUM('córdoba capital', 'otra localidad', 'otra provincia', 'otro país'),
    allowNull: false,
    unique: true,
    validate: {
      isIn: [['córdoba capital', 'otra localidad', 'otra provincia', 'otro país']]
    }
  },
  proc_otro_text: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      len: [2, 100]
    }
  }
}, {
  freezeTableName: true,
  paranoid: true
});
module.exports = Procedencia;
