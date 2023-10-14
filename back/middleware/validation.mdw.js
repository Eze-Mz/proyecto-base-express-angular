const { validationResult } = require('express-validator');

const validateResult = (req, res, next) => {
  try {
    validationResult(req).throw();
    next();
  } catch (error) {
    return next(error.mapped());
  }
};

module.exports = { validateResult };
