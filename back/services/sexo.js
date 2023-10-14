const { sexoProvider } = require('../providers');

const createSexo = async (sexo, surveyId, t) => {
  const newSexo = {
    sexo,
    SurveyId: surveyId
  };
  return await sexoProvider.createAnswer(newSexo, t);
};

module.exports = {
  createSexo
};
