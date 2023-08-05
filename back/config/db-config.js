const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
	dialect: "sqlite",
	storage: "./database.sqlite",
});

const initializeDB = async () => {
	try {
		await sequelize.authenticate();
		console.log("Conexión a la base de datos establecida");
		await sequelize.sync({ force: true });
	} catch (error) {
		console.error("Error al inicializar la base de datos", error);
	}
};

module.exports = { sequelize, initializeDB }