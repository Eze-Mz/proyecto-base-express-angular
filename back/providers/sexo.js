const { Sexo } = require('../models');

const createAnswer = async (answer) => {
  try {
    const newAnswer = await Sexo.create(answer);
    return newAnswer;
  } catch (error) {
    console.error('Error al crear la respuesta', error);
    throw error;
  }
};

const getAnswers = async () => {
  try {
    const answers = await Sexo.findAll();
    return answers;
  } catch (error) {
    console.error('Error al buscar las respuestas', error);
    throw error;
  }
};

const updateAnswer = async (updatedAnswer, SurveyId) => {
  try {
    const answer = await Sexo.update(updatedAnswer, { where: { SurveyId } });
    return answer;
  } catch (error) {
    console.error('Error al actualizar la respuesta', error);
    throw error;
  }
};

module.exports = {
  createAnswer,
  getAnswers,
  updateAnswer
};
