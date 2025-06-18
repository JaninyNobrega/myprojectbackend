const jwt = require('jsonwebtoken');
const userRepository = require('../../repositories/user');

const jwtSecret = process.env.JWT_SECRET;

const generateToken = async (email, password) => {
  if (!email || !password) {
    throw new Error('Email e senha são obrigatórios.');
  }

  const user = await userRepository.findUserByCredentials(email, password);

  if (!user) {
    throw new Error('Credenciais inválidas.');
  }

  const payload = {
    userId: user.id,
    email: user.email,
  };

  const options = {
    expiresIn: '1h',
  };

  const token = jwt.sign(payload, jwtSecret, options);

  return token;
};

module.exports = {
  generateToken,
};