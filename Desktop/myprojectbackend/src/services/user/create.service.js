const prisma = require('../../config/prisma'); 
const { hashPassword } = require('../../utils/hash'); 
const createUser = async (userData) => {
  const { firstname, surname, email, password } = userData;

  // 1. Verificar se o e-mail já existe
  const existingUser = await prisma.user.findUnique({
    where: { email: email },
  });

  if (existingUser) {
    throw new Error('E-mail já cadastrado.');
  }

  // 2. Hash da senha antes de salvar
  const hashedPassword = await hashPassword(password);

  // 3. Criar o usuário no banco de dados
  const newUser = await prisma.user.create({
    data: {
      firstname,
      surname,
      email,
      password: hashedPassword,
    },
    // Seleciona os campos que serão retornados após a criação
    select: {
      id: true,
      firstname: true,
      surname: true,
      email: true,
    },
  });

  return newUser;
};

module.exports = {
    createUser
 };