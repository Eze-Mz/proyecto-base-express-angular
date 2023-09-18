const { sequelize } = require('../../config/db-config.js');
const { DataTypes } = require('sequelize');

const Procedencia = sequelize.define('Procedencia', {
  procedencia: {
    type: DataTypes.ENUM('córdoba capital', 'otra localidad', 'otra provincia', 'otro país'),
    allowNull: false,
    unique: true,
    validate: {
      isIn: [['córdoba capital', 'otra localidad', 'otra provincia', 'otro país']]
    },
    otro_localidad: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [2, 100]
      }
    },
    otro_provincia: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [2, 100]
      }
    },
    otro_pais: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [2, 100]
      }
    }
  }
}, {
  freezeTableName: true
});
module.exports = Procedencia;
