const { users } = require('./userMockups.js');

const createUsersOnStart = async () => {
  try {
    const User = require('../models/user.js');
    for (let i = 0; i < users.length; i++) {
      await User.create(users[i]);
    }
  } catch (error) {
    console.error('Error al crear el usuario admin', error);
  }
};

const createRolesOnStart = async () => {
  try {
    const Role = require('../models/role.js');
    const roles = ['ADMIN', 'USER'];
    for (let i = 0; i < roles.length; i++) {
      await Role.create({
        roleName: roles[i]
      });
    }
  } catch (error) {
    console.error('Error al crear los roles', error);
  }
};

const createSurveysOnStart = async () => {
  try {
    const { surveyService } = require('../services');
    const { exampleSurveys } = require('./surveyMockups.js');
    for (let i = 0; i < exampleSurveys.length; i++) {
      const survey = exampleSurveys[i];
      survey.userId = Math.floor(Math.random() * 3) + 1;
      await surveyService.createSurvey(exampleSurveys[i]);
    }
  } catch (error) {
    console.error('Error al crear las encuestas', error);
  }
};

module.exports = {
  createUsersOnStart,
  createRolesOnStart,
  createSurveysOnStart
};
