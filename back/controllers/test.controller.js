const User = require('../models/test');

const getData = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.error('Error al buscar los usuarios', error);
    throw error;
  }
};

module.exports = {
  getData
};
