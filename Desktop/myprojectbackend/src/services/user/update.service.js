const userRepository = require('../../repositories/user');

const updateUser = async (userId, userData) => {
  const { firstname, surname, email } = userData;


  const existingUserById = await userRepository.getUserByIdRepository(userId); // AQUI

  if (!existingUserById) {
    throw new Error('Usuário não encontrado.');
  }

  
  if (email) {
    const existingUserByEmail = await userRepository.findUserByEmailRepository(email); // AQUI

    if (existingUserByEmail && existingUserByEmail.id !== userId) {
      throw new Error('E-mail já cadastrado por outro usuário.');
    }
  }

 
  const dataToUpdate = {};
  if (firstname !== undefined) dataToUpdate.firstname = firstname;
  if (surname !== undefined) dataToUpdate.surname = surname;
  if (email !== undefined) dataToUpdate.email = email;

  const updatedUser = await userRepository.updateUserRepository(userId, dataToUpdate); // AQUI

  return updatedUser;
};

module.exports = {
  updateUser,
};