const express = require('express');
const router = express.Router();
const userRouter = require('./user.js');
const loginRouter = require('./login.js');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.json('HELLO WORLD');
});

router.use('/login', loginRouter);
router.use('/user', userRouter);

module.exports = router;
