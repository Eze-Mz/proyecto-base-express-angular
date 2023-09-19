const express = require('express');
const router = express.Router();
const userRouter = require('./user.js');
const loginRouter = require('./login.js');
const surveyRouter = require('./survey.js');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.json('HELLO WORLD');
});

router.use('/login', loginRouter);
router.use('/user', userRouter);
router.use('/survey', surveyRouter);

module.exports = router;
