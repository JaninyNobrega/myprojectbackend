const prisma = require('../config/prisma'); 
const { hashPassword } = require('../utils/hash'); 

const getUserById = async (userId) => {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      id: true,
      firstname: true,
      surname: true,
      email: true,
    },
  });
  return user;
};

//Criando endpoint de cadastro de usuário
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
      password: hashedPassword, // Salva a senha hasheada
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

// Criando endpoint atualizar usuário

const updateUser = async (userId, userData) => {
  const { firstname, surname, email } = userData;

  // 1. Verificar se o usuário existe
  const existingUserById = await prisma.user.findUnique({
    where: { id: userId },
  });

  if (!existingUserById) {
    throw new Error('Usuário não encontrado.');
  }

  // 2. Verificar se o e-mail já existe E pertence a outro usuário
  if (email) {
    const existingUserByEmail = await prisma.user.findUnique({
      where: { email: email },
    });

    if (existingUserByEmail && existingUserByEmail.id !== userId) {
      throw new Error('E-mail já cadastrado por outro usuário.');
    }
  }

  // 3. Preparar os dados para atualização (apenas os campos fornecidos)
  const dataToUpdate = {};
  if (firstname !== undefined) dataToUpdate.firstname = firstname;
  if (surname !== undefined) dataToUpdate.surname = surname;
  if (email !== undefined) dataToUpdate.email = email;
  

  // 4. Atualizar o usuário no banco de dados
  const updatedUser = await prisma.user.update({
    where: {
      id: userId,
    },
    data: dataToUpdate,
    select: {
      id: true,
      firstname: true,
      surname: true,
      email: true,
    },
  });

  return updatedUser;
};

module.exports = {
  getUserById,
  createUser,
  updateUser,
};