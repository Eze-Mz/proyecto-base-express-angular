const { sexoProvider } = require('../providers');

const createSexo = async (sexo, surveyId) => {
  const newSexo = {
    sexo,
    SurveyId: surveyId
  };
  return await sexoProvider.createAnswer(newSexo);
};

module.exports = {
  createSexo
};
