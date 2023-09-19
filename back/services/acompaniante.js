const { acompanianteProvider } = require('../providers');

const createAcompaniante = async (acompaniante, surveyId) => {
  const newAcompaniante = {
    ...acompaniante.opciones,
    SurveyId: surveyId
  };
  console.log(newAcompaniante);
  if (acompaniante.acom_otro) {
    newAcompaniante.acom_otro_text = acompaniante.acom_otro_text;
  }

  return await acompanianteProvider.createAnswer(newAcompaniante);
};

module.exports = {
  createAcompaniante
};
