const express = require('express');
const jwt = require('jsonwebtoken');
const { validatePassword } = require('../helpers/passwords');
const { userService } = require('../services');

const loginRouter = express.Router();

loginRouter.post('/', async (req, res) => {
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
      return res.status(401).json({ message: 'Email o password incorrectos' });
    }

    // validar si el password es correcto
    const validPassword = validatePassword(password, user.password);
    if (!validPassword) {
      return res.status(401).json({ message: 'Email o password incorrectos' });
    }

    const tokenData = {
      id: user.id,
      email: user.email,
      role: user.Role.roleName
    };

    const token = jwt.sign(tokenData, process.env.SECRET);

    res.json(token);
  } catch (error) {
    console.error('Error al hacer login', error);
    res.json({ message: 'Error al hacer login' });
  }

  // si existe chequear el rol y generar el token con el nombre y el rol
  /* if (user) {
    const token = jwt.sign(
      { username: user.username, role: user.role },
      SERVER_SECRET
    );
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  } */
});

module.exports = loginRouter;
