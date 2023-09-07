const { userService } = require('../services');

const createUser = async (req, res) => {
  try {
    const newUser = await userService.createUser(req.body);
    res.json(newUser);
  } catch (error) {
    res.status(500).json({ action: 'createUser', error: error.message });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await userService.getUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ action: 'getUsers', error: error.message });
  }
};

module.exports = {
  createUser,
  getUsers
};
