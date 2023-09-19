const { surveyProvider } = require('../providers');
const { createEdad } = require('./edad');
const { createSexo } = require('./sexo');
const { createProcedencia } = require('./procedencia');
const { createAcompaniante } = require('./acompaniante');

const createSurvey = async (data) => {
  const surveyData = {
    state: false,
    UserId: data.userId
  };
  const newSurvey = await surveyProvider.createSurvey(surveyData);
  const surveyId = newSurvey.id;
  if (data.edad) {
    await createEdad(data.edad, surveyId);
  }
  if (data.sexo) {
    await createSexo(data.sexo, surveyId);
  }
  if (data.procedencia) {
    await createProcedencia(data.procedencia, surveyId);
  }
  if (data.acompaniante) {
    await createAcompaniante(data.acompaniante, surveyId);
  }
  return newSurvey;
};

const getSurvey = async () => {
  return await surveyProvider.getSurvey();
};

module.exports = {
  createSurvey,
  getSurvey
};
