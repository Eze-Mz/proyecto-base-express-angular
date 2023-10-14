const express = require('express');
const { userIsAuthenticatedMDW } = require('../middleware/auth.mdw');

const surveyRouter = express.Router();

const { surveyController } = require('../controllers');
const { surveySchema } = require('../validators/survey');
const { validateResult } = require('../middleware/validation.mdw');
const { validateError } = require('../exceptions/validateError');

surveyRouter.post('/', userIsAuthenticatedMDW(), surveySchema, validateResult, surveyController.createSurvey, validateError);
surveyRouter.get('/', userIsAuthenticatedMDW(), surveyController.getSurvey);
surveyRouter.get('/count', userIsAuthenticatedMDW(), surveyController.count);

module.exports = surveyRouter;
