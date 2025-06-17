
const bcrypt = require('bcryptjs');

const SALT_ROUNDS = 10; // Custo computacional para o hash. 10 é um valor comum e seguro.

/**
 * Gera o hash de uma senha.
 * @param {string} password - A senha em texto puro.
 * @returns {Promise<string>} O hash da senha.
 */
const hashPassword = async (password) => {
  return bcrypt.hash(password, SALT_ROUNDS);
};

/**
 * Compara uma senha em texto puro com um hash de senha.
 * @param {string} password - A senha em texto puro.
 * @param {string} hashedPassword - O hash da senha a ser comparado.
 * @returns {Promise<boolean>} True se as senhas coincidirem, false caso contrário.
 */
const comparePassword = async (password, hashedPassword) => {
  return bcrypt.compare(password, hashedPassword);
};

module.exports = {
  hashPassword,
  comparePassword,
};