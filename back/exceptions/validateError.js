const validateError = (err, req, res, next) => {
  if (err) {
    console.log(err);
    return res.status(400).json({ error: err });
  }
  next();
};

module.exports = { validateError };
