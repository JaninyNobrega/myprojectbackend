const prisma = require('../../config/prisma');

const deleteUser = async (userId) => {
  try {
    const deletedUser = await prisma.user.delete({
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
    return deletedUser;
  } catch (error) {
   
    if (error.code === 'P2025') {
      throw new Error('Usuário não encontrado.');
    }
    
    throw error;
  }
};

module.exports = {
  deleteUser,
};