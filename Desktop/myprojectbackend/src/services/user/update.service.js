const prisma = require('../../config/prisma');

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
   updateUser
};