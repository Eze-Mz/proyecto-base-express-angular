const express = require('express');
const testController = require('../controllers/test.controller.js');

const testRouter = express.Router();

testRouter.get('/', testController.getData);

module.exports = testRouter;
