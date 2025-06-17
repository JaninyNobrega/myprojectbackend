const { deleteUser } = require('../../services/user/delete.service'); // Importa a função de serviço de deleção

/**
 * Controlador para deletar um usuário.
 * DELETE /v1/user/:id
 */
const deleteUserController = async (req, res) => {
  try {
    const { id } = req.params; // ID do usuário da URL
    const userId = parseInt(id, 10);

    // Validação básica do ID
    if (isNaN(userId)) {
      return res.status(400).json({ message: 'ID de usuário inválido.' });
    }

    // Chama o serviço para deletar o usuário
    await deleteUser(userId);

    // Retorna 204 No Content para sucesso sem corpo de resposta
    res.status(204).send();

  } catch (error) {
    console.error('Erro ao deletar usuário:', error);
    // Trata erros específicos do serviço (ex: usuário não encontrado)
    if (error.message === 'Usuário não encontrado.') {
      return res.status(404).json({ message: error.message });
    }
    // Para outros erros não esperados, retorna 500
    res.status(500).json({ message: 'Erro interno do servidor ao deletar usuário.' });
  }
};

module.exports = {
  deleteUserController,
};