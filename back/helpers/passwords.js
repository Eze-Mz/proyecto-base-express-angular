const { scryptSync, randomBytes, timingSafeEqual } = require('crypto');

function createPassword (password) {
  const salt = randomBytes(16).toString('hex');
  const hash = scryptSync(password, salt, 64).toString('hex');
  return `${salt}:${hash}`;
}

function validatePassword (password, hash) {
  const [salt, key] = hash.split(':');
  const newHash = scryptSync(password, salt, 64).toString('hex');
  return timingSafeEqual(Buffer.from(key), Buffer.from(newHash));
}

module.exports = {
  createPassword,
  validatePassword
};
