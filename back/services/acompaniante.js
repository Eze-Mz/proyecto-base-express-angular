const { acompanianteProvider } = require('../providers');

const createAcompaniante = async (acompaniante, surveyId) => {
  const newAcompaniante = {
    ...acompaniante.opciones,
    SurveyId: surveyId
  };
  if (acompaniante.opciones.acom_otro) {
    newAcompaniante.acom_otro_text = acompaniante.texto_otros;
  }

  return await acompanianteProvider.createAnswer(newAcompaniante);
};

module.exports = {
  createAcompaniante
};
