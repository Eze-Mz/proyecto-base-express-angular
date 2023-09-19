// modelo de respuestas de acompañante
const { sequelize } = require('../../config/db-config.js');
const { DataTypes } = require('sequelize');

const Acompaniante = sequelize.define('Acompaniante', {
  acom_solo: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    validate: {
      isIn: [[true, false]]
    }
  },
  acom_pareja: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    validate: {
      isIn: [[true, false]]
    }
  },
  acom_familia: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    validate: {
      isIn: [[true, false]]
    }
  },
  acom_amigo: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    validate: {
      isIn: [[true, false]]
    }
  },
  acom_excursion: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    validate: {
      isIn: [[true, false]]
    }
  },
  acom_otro: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    validate: {
      isIn: [[true, false]]
    }
  },
  acom_otro_text: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      len: [2, 200]
    }
  }

}, {
  freezeTableName: true,
  paranoid: true
});

module.exports = Acompaniante;
