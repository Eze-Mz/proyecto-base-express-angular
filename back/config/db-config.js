const { Sequelize } = require('sequelize');
const { createUsersOnStart, createRolesOnStart } = require('../seeders/populateDB');
const fs = require('fs');
const path = require('path');
const basename = path.basename(__filename);

const populateDB = false;

const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: process.env.DB_DIALECT
});

const __parent = path.resolve(__dirname, '..');
const models = path.join(__parent, 'models');

const loadModels = () => {
  fs
    .readdirSync(models)
    .filter(file => {
      return (
        file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
      );
    })
    .forEach(file => {
      const model = require(path.join(models, file));
      sequelize[model.name] = model;
    });
};

const initializeDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexión a la base de datos establecida');
    loadModels();
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
