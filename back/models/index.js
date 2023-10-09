const User = require('./user.js');
const Role = require('./role.js');
const Sexo = require('./answers/sexo.js');
const Edad = require('./answers/edad.js');
const Survey = require('./survey.js');
const Procedencia = require('./answers/procedencia.js');
const Acompaniante = require('./answers/acompaniante.js');
const { ANSWER_IDS } = require('../helpers/constants.js');

// Relaciones respuesta-encuesta
/* Notar que si no se incluye la relación "hasOne" al hacer un findAll({include:{all:true}}) en Survey no trae la respuesta asociada */
Survey.hasOne(Acompaniante, { as: ANSWER_IDS.ACOMPANIANTE, foreignKey: { name: 'SurveyId', allowNull: false } });
Acompaniante.belongsTo(Survey);
Survey.hasOne(Sexo, { as: ANSWER_IDS.SEXO, foreignKey: { name: 'SurveyId', allowNull: false } });
Sexo.belongsTo(Survey);
Survey.hasOne(Edad, { as: ANSWER_IDS.EDAD, foreignKey: { name: 'SurveyId', allowNull: false } });
Edad.belongsTo(Survey);
Survey.hasOne(Procedencia, { as: ANSWER_IDS.PROCEDENCIA, foreignKey: { name: 'SurveyId', allowNull: false } });
Procedencia.belongsTo(Survey);

module.exports = { User, Role, Sexo, Edad, Procedencia, Acompaniante, Survey };
