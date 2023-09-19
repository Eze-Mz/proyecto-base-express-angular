const jwt = require('jsonwebtoken');
const { validatePassword } = require('../helpers/passwords');
const { userService } = require('../services');

const createToken = async (req, res) => {
  try {
    const { body } = req;
    const { email, password } = body;
    // check if password and email are strings
    const checkPassword = typeof password === 'string' || password instanceof String;
    const checkEmail = typeof email === 'string' || email instanceof String;
    if (!(checkPassword && checkEmail)) {
      res.status(400).json({ message: 'Email y password deben ser un string' });
      return;
    }

    // buscar si el usuario existe en la base de datos
    const user = await userService.checkIfUserExists(email);
    if (!user) {
      return res.status(400).json({ message: 'Email o password incorrectos' });
    }

    // validar si el password es correcto
    const validPassword = validatePassword(password, user.password);
    if (!validPassword) {
      return res.status(400).json({ message: 'Email o password incorrectos' });
    }

    const tokenData = {
      id: user.id,
      email: user.email,
      role: user.Role.roleName
    };

    const token = jwt.sign(tokenData, process.env.SECRET);

    res.json(token);
  } catch (error) {
    console.error('Error en el login', error);
    res.json({ message: `Error en el login ${error}` });
  }
};

module.exports = {
  createToken
};
