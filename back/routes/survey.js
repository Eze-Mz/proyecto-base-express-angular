const express = require('express');
const { userIsAuthenticatedMDW } = require('../middleware/auth.mdw');

const surveyRouter = express.Router();

const { surveyController } = require('../controllers');
const { surveySchema } = require('../validators/survey');
const { validateResult } = require('../middleware/validation.mdw');

surveyRouter.post('/', userIsAuthenticatedMDW(), surveySchema, validateResult, surveyController.createSurvey);
surveyRouter.get('/', userIsAuthenticatedMDW(), surveyController.getSurvey);

module.exports = surveyRouter;
