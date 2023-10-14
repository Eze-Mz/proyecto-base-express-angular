const { acompanianteProvider } = require('../providers');

const createAcompaniante = async (acompaniante, surveyId, t) => {
  const newAcompaniante = {
    ...acompaniante.opciones,
    SurveyId: surveyId
  };
  if (acompaniante.opciones.acom_otro) {
    newAcompaniante.acom_otro_text = acompaniante.texto_otros;
  }

  return await acompanianteProvider.createAnswer(newAcompaniante, t);
};

module.exports = {
  createAcompaniante
};
