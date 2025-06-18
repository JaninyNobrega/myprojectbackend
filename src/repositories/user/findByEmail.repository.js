// src/repositories/user/findByEmail.repository.js
const prisma = require('../../config/prisma');

/**
 * Busca um usuário pelo e-mail no banco de dados.
 * @param {string} email - O e-mail do usuário a ser buscado.
 * @returns {Promise<Object|null>} O objeto do usuário se encontrado, ou null.
 */
const findUserByEmailRepository = async (email) => {
  const user = await prisma.user.findUnique({
    where: { email: email },
    select: {
      id: true,
      firstname: true,
      surname: true,
      email: true,
      password: true, // Precisamos da senha aqui para o login futuro, mas não retorná-la para o frontend
    },
  });
  return user;
};

module.exports = {
  findUserByEmailRepository,
};