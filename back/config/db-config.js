const { Sequelize } = require('sequelize');
const { createUsersOnStart, createRolesOnStart } = require('../seeders/populateDB');

const populateDB = false;

const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: process.env.DB_DIALECT
});

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
    }
  } catch (error) {
    console.error('Error al inicializar la base de datos', error);
  }
};

module.exports = { sequelize, initializeDB };
