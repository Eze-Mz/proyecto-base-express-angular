const { Sequelize } = require('sequelize');
// const createUsersOnStart = require('../seeders/createTest');

console.log(process.env.DB_URL);
const sequelize = new Sequelize(process.env.DB_URL);

const initializeDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexión a la base de datos establecida');
    await sequelize.sync({ force: false });
    // await createUsersOnStart();
  } catch (error) {
    console.error('Error al inicializar la base de datos', error);
  }
};

module.exports = { sequelize, initializeDB };
