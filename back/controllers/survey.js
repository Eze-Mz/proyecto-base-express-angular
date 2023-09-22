const { surveyService } = require('../services');

const createSurvey = async (req, res) => {
  try {
    // Agregar el id del admin que creo que usuario
    const survey = req.body;
    const tokenData = req.tokenData;
    survey.userId = tokenData.id;
    // crear encuesta
    const createdSurvey = await surveyService.createSurvey(survey);
    res.status(201).json(createdSurvey);
  } catch (error) {
    // extraer el mensaje de error de sequelize
    // const message = error.errors[0].message;
    console.log(error);
    res.status(500).json({ action: 'createSurvey', error: error.message });
  }
};

const getSurvey = async (req, res) => {
  try {
    const users = await surveyService.getSurvey();
    res.json(users);
  } catch (error) {
    res.status(500).json({ action: 'getSurvey', error: error.message });
  }
};

const count = async (req, res) => {
  try {
    const count = await surveyService.getSurveyCount();
    res.json(count);
  } catch (error) {
    res.status(500).json({ action: 'count', error: error.message });
  }
};

module.exports = {
  createSurvey,
  getSurvey,
  count
};
