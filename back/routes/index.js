const express = require('express');
const router = express.Router();
const userRouter = require('./user.js');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.json('HELLO WORLD');
});

router.use('/user', userRouter);

module.exports = router;
