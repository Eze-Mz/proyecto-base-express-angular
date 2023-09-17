const { Sequelize } = require('sequelize');
const { createUsersOnStart, createRolesOnStart } = require('../seeders/populateDB');

const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: process.env.DB_DIALECT
});

const initializeDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexión a la base de datos establecida');
    const Role = require('../models/role');
    const User = require('../models/user');
    const Survey = require('../models/survey');
    console.log(sequelize.models);
    await User.sync({ alter: false });
    await Role.sync({ alter: false });
    await Survey.sync({ alter: false });
    await createRolesOnStart();
    await createUsersOnStart();
  } catch (error) {
    console.error('Error al inicializar la base de datos', error);
  }
};

module.exports = { sequelize, initializeDB };
