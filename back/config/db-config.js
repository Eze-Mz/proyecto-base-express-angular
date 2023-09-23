const { Sequelize } = require('sequelize');
const {
  createUsersOnStart,
  createRolesOnStart,
  createSurveysOnStart
} = require('../seeders/populateDB');

const populateDB = process.env.DB_POPULATE === 'true';
const loadSurveys = process.env.DB_LOAD_SURVEYS === 'true';

let sequelize;

console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === 'production') {
  sequelize = new Sequelize(process.env.DB_URL, {
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    },
    logging: false
  });
} else {
  sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT
  });
}
const initializeDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexión a la base de datos establecida');
    require('../models');
    console.log(sequelize.models);
    if (populateDB) {
      await sequelize.sync({ force: true });
      await createRolesOnStart();
      await createUsersOnStart();
      if (loadSurveys) {
        await createSurveysOnStart();
      }
    }
  } catch (error) {
    console.error('Error al inicializar la base de datos', error);
  }
};

module.exports = { sequelize, initializeDB };
