const { Survey } = require('../models');

const createSurvey = async (survey) => {
  try {
    const newSurvey = await Survey.create(survey);
    return newSurvey;
  } catch (error) {
    console.error('Error al crear la encuesta', error);
    throw error;
  }
};

const getSurvey = async () => {
  try {
    const survey = await Survey.findAll({ include: { all: true }, order: [['createdAt', 'DESC'], ['id', 'DESC']], attributes: { exclude: ['UserId'] }, limit: 5 });
    return survey;
  } catch (error) {
    console.error('Error al buscar las encuestas', error);
    throw error;
  }
};

const getSurveyById = async (id) => {
  try {
    const survey = await Survey.findAll({ where: { id }, include: ['Edad', 'Sexo', 'Procedencia', 'Acompaniante'] });
    return survey;
  } catch (error) {
    console.error(` Error al buscar la encuesta con id ${id}`, error);
    throw error;
  }
};

const getSurveyByUserId = async (UserId) => {
  try {
    const survey = await Survey.findAll({ where: { UserId }, include: ['Edad', 'Sexo', 'Procedencia', 'Acompaniante'] });
    return survey;
  } catch (error) {
    console.error(` Error al buscar las encuestas el usuario con id: ${UserId}`, error);
    throw error;
  }
};

const getSurveyCount = async () => {
  try {
    const surveyCount = await Survey.count();
    return surveyCount;
  } catch (error) {
    console.error('Error al buscar las encuestas', error);
    throw error;
  }
};

const updateSurvey = async (updatedSurvey, SurveyId) => {
  try {
    const answer = await Survey.update(updatedSurvey, { where: { SurveyId } });
    return answer;
  } catch (error) {
    console.error('Error al actualizar la encuesta', error);
    throw error;
  }
};

module.exports = {
  createSurvey,
  getSurvey,
  getSurveyById,
  getSurveyByUserId,
  updateSurvey,
  getSurveyCount
};
