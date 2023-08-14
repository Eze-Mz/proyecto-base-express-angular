const createUsersOnStart = async () => {
  try {
    const User = require('../models/test.js');
    for (let i = 0; i < 10; i++) {
      await User.build({
        role: 'ADMIN'
      }).save();
    }
    for (let i = 0; i < 15; i++) {
      await User.build().save();
    }
  } catch (error) {
    console.error('Error al crear el usuario admin', error);
  }
};

module.exports = createUsersOnStart;
