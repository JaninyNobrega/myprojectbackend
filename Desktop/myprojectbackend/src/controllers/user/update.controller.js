const { updateUser } = require('../../services/user/update.service'); 

/**
 * Controlador para atualizar as informações de um usuário.
 * PUT /v1/user/:id
 */
const updateUserController = async (req, res) => {
  try {
    const { id } = req.params; // ID do usuário da URL
    const userId = parseInt(id, 10);
    const userData = req.body; // Dados para atualização do corpo da requisição

    // Validação básica do ID
    if (isNaN(userId)) {
      return res.status(400).json({ message: 'ID de usuário inválido.' });
    }

    // Validação se há dados para atualizar
    if (Object.keys(userData).length === 0) {
      return res.status(400).json({ message: 'Nenhum dado fornecido para atualização.' });
    }

    // Validação de formato de e-mail se presente no payload
    if (userData.email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(userData.email)) {
        return res.status(400).json({ message: 'Formato de e-mail inválido.' });
      }
    }

    // Chamar o serviço para atualizar o usuário
    // O serviço já faz a verificação de existência do usuário e email duplicado
    await updateUser(userId, userData);

    // Retorna 204 No Content para sucesso sem corpo de resposta
    res.status(204).send(); // .send() para não retornar nenhum corpo

  } catch (error) {
    console.error('Erro ao atualizar usuário:', error);
    // Trata erros específicos do serviço
    if (error.message === 'Usuário não encontrado.') {
      return res.status(404).json({ message: error.message });
    }
    if (error.message === 'E-mail já cadastrado por outro usuário.') {
      return res.status(400).json({ message: error.message });
    }
    // Para outros erros não esperados, retorna 500
    res.status(500).json({ message: 'Erro interno do servidor ao atualizar usuário.' });
  }
};

module.exports = {
  updateUserController,
};