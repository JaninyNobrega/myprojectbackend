const { hashPassword } = require('../../utils/hash');
const userRepository = require('../../repositories/user');

const createUser = async (userData) => {
  const { firstname, surname, email, password } = userData;

 
  const existingUser = await userRepository.findUserByEmailRepository(email);

  if (existingUser) {
    throw new Error('E-mail já cadastrado.');
  }

 
  const hashedPassword = await hashPassword(password);

  
  const dataToCreate = {
    firstname,
    surname,
    email,
    password: hashedPassword,
  };

  const newUser = await userRepository.createUserRepository(dataToCreate);

  return newUser;
};

module.exports = {
  createUser,
};