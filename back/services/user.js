const { userProvider } = require('../providers');

const createUser = async (user) => {
  return await userProvider.createUser(user);
};

const getUsers = async () => {
  return await userProvider.getUsers();
};

const checkIfUserExists = async (email) => {
  const userFound = userProvider.getUserByEmail(email);
  return userFound || false;
};

const getUsersByAdminId = async (adminId) => {
  return await userProvider.getUsersByAdminId(adminId);
};

module.exports = {
  createUser,
  getUsers,
  checkIfUserExists,
  getUsersByAdminId
};
