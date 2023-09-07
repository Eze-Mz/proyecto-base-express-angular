const { users } = require('./mockups.js');

const createUsersOnStart = async () => {
  try {
    const User = require('../models/user.js');
    for (let i = 0; i < users.length; i++) {
      await User.create(users[i]);
    }
  } catch (error) {
    console.error('Error al crear el usuario admin', error);
  }
};

const createRolesOnStart = async () => {
  try {
    const Role = require('../models/role.js');
    const roles = ['ADMIN', 'USER'];
    for (let i = 0; i < roles.length; i++) {
      await Role.create({
        roleName: roles[i]
      });
    }
  } catch (error) {
    console.error('Error al crear los roles', error);
  }
};

module.exports = {
  createUsersOnStart,
  createRolesOnStart
};
