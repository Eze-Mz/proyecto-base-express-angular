const User = require('./user.js');
const Role = require('./role.js');
const Sexo = require('./answers/sexo.js');
const Edad = require('./answers/edad.js');
const Survey = require('./survey.js');
const Procedencia = require('./answers/procedencia.js');
const Acompaniante = require('./answers/acompaniante.js');

// Realaciones respuesta-encuesta
Acompaniante.belongsTo(Survey);
Survey.hasMany(Acompaniante);
Sexo.belongsTo(Survey);
Survey.hasMany(Sexo);
Edad.belongsTo(Survey);
Survey.hasMany(Edad);
Procedencia.belongsTo(Survey);
Survey.hasMany(Procedencia);

module.exports = { User, Role, Sexo, Edad, Procedencia, Acompaniante, Survey };
