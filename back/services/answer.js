const { ANSWER_IDS } = require('../helpers/constants');
const {
  acompanianteProvider,
  edadProvider,
  sexoProvider,
  procedenciaProvider
} = require('../providers');

const getAllAnswerByType = async (answerType) => {
  let answers;
  switch (answerType) {
    case ANSWER_IDS.ACOMPANIANTE:
      answers = await acompanianteProvider.getAnswers();
      break;
    case ANSWER_IDS.EDAD:
      answers = await edadProvider.getAnswers();
      break;
    case ANSWER_IDS.SEXO:
      answers = await sexoProvider.getAnswers();
      break;
    case ANSWER_IDS.PROCEDENCIA:
      answers = await procedenciaProvider.getAnswers();
      break;
    default:
      throw new Error('El identificador de respuesta no es válido');
  }
  return answers;
};

module.exports = {
  getAllAnswerByType
};
