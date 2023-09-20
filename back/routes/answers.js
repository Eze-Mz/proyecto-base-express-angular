const express = require('express');
const { userIsAuthenticatedMDW } = require('../middleware/auth.mdw');
const { answersController } = require('../controllers');

const surveyRouter = express.Router();

surveyRouter.get('/:answerType', userIsAuthenticatedMDW('ADMIN'), answersController.getAllAnswerByType);

module.exports = surveyRouter;
