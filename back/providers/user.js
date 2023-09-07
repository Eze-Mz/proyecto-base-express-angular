const { User } = require('../models');

const createUser = async (user) => {
  try {
    const newUser = await User.create(user);
    return newUser;
  } catch (error) {
    console.error('Error al crear el usuario', error);
    throw error;
  }
};

const getUsers = async () => {
  try {
    const users = await User.findAll({
      attributes: {
        exclude: ['password', 'createdAt', 'updatedAt', 'RoleId']
      },
      include: {
        association: 'Role',
        attributes: ['roleName']
      }
    });
    return users;
  } catch (error) {
    console.error('Error al buscar los usuarios', error);
    throw error;
  }
};

const getUserByEmail = async (email) => {
  try {
    const user = await User.findOne({ where: { email }, include: 'Role' });
    return user;
  } catch (error) {
    console.error('Error al buscar un usuario', error);
    throw error;
  }
};

module.exports = {
  createUser,
  getUsers,
  getUserByEmail
};
