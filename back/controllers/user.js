const { userService } = require('../services');

const createUser = async (req, res) => {
  try {
    // Agregar el id del admin que creo que usuario
    const newUser = req.body;
    newUser.UserId = req.tokenData.id;
    const createdUser = await userService.createUser(req.body);
    res.json(createdUser);
  } catch (error) {
    // extraer el mensaje de error de sequelize
    const message = error.errors[0].message;
    console.log(message);
    res.status(400).json({ action: 'createUser', error: message });
  }
};

const getUsersByAdminId = async (req, res) => {
  try {
    const { adminId } = req.params;
    const users = await userService.getUsersByAdminId(adminId);
    res.json(users);
  } catch (error) {
    res.status(500).json({ action: 'getUsersByAdminId', error: error.message });
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
  getUsers,
  getUsersByAdminId
};
