const { surveyProvider } = require('../providers');
const { createEdad } = require('./edad');
const { createSexo } = require('./sexo');
const { createProcedencia } = require('./procedencia');
const { createAcompaniante } = require('./acompaniante');
const { sequelize } = require('../config/db-config');

const createSurvey = async (data) => {
  const surveyData = {
    state: false,
    UserId: data.userId
  };
  if (data.edad && data.sexo && data.procedencia && data.acompaniante) {
    surveyData.state = true;
  }

  const result = await sequelize.transaction(async (t) => {
    const newSurvey = await surveyProvider.createSurvey(surveyData, t);
    const surveyId = newSurvey.id;
    if (data.edad) {
      await createEdad(data.edad, surveyId, t);
    }
    if (data.sexo) {
      await createSexo(data.sexo, surveyId, t);
    }
    if (data.procedencia) {
      await createProcedencia(data.procedencia, surveyId, t);
    }
    if (data.acompaniante) {
      await createAcompaniante(data.acompaniante, surveyId, t);
    }
    return newSurvey;
  });
  return result;
};

const getSurvey = async () => {
  return await surveyProvider.getSurvey();
};

const getSurveyCount = async () => {
  return await surveyProvider.getSurveyCount();
};

module.exports = {
  createSurvey,
  getSurvey,
  getSurveyCount
};
