const { edadProvider } = require('../providers');

const createEdad = async (edad, surveyId, t) => {
  const newEdad = {
    edad,
    SurveyId: surveyId
  };
  return await edadProvider.createAnswer(newEdad, t);
};

module.exports = {
  createEdad
};
