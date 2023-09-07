const jwt = require('jsonwebtoken');
/**
 *
 * @param {*} role agregar "ADMIN" para proteger las rutas para administradores
 * @returns middleware function
 */

const userIsAuthenticatedMDW = (role) => {
  return (req, res, next) => {
    const authorization = req.get('authorization');
    if (!authorization || !authorization.toLowerCase().startsWith('bearer')) {
      return res.status(401).json({ message: 'No se ha enviado el token de autenticación' });
    }
    const token = authorization.substring(7);
    if (!token) {
      return res.status(401).json({ message: 'No se ha enviado el token de autenticación' });
    }
    try {
      const tokenData = jwt.verify(token, process.env.SECRET);
      if (role && role !== tokenData.role) {
        return res.status(403).json({ message: 'No tienes permisos para realizar esta acción' });
      }
      req.tokenData = tokenData;
      next();
    } catch (error) {
      return res.status(401).json({ message: 'Token inválido' });
    }
  };
};

module.exports = {
  userIsAuthenticatedMDW
};
