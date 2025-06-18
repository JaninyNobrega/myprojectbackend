const prisma = require('../../config/prisma');

const findUserByCredentials = async (email, password) => {
  const user = await prisma.user.findUnique({
    where: {
      email: email,
      password: password, 
    },
    select: {
      id: true,
      email: true,
    },
  });
  return user;
};

module.exports = {
  findUserByCredentials,
};