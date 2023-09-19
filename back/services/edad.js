const { edadProvider } = require('../providers');

const createEdad = async (edad, surveyId) => {
  const newEdad = {
    edad,
    SurveyId: surveyId
  };
  return await edadProvider.createAnswer(newEdad);
};

module.exports = {
  createEdad
};
