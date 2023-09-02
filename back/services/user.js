const { userProvider } = require('../providers');

const createUser = async (user) => {
  return await userProvider.createUser(user);
};

const getUsers = async () => {
  return await userProvider.getUsers();
};

module.exports = {
  createUser,
  getUsers
};
