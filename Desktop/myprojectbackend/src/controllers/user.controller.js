const userService = require('../services/user.service');

/**
 * Controlador para obter informações de um usuário pelo ID.
 * GET /v1/user/:id
 */
const getUserByIdController = async (req, res) => { 
  try {
    const { id } = req.params; 
    const userId = parseInt(id, 10);
    if (isNaN(userId)) {
      return res.status(400).json({ message: 'ID de usuário inválido.' });
    }

    const user = await userService.getUserById(userId); 

    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado.' });
    }

    res.status(200).json(user); 
  } catch (error) {
    console.error('Erro ao obter usuário por ID:', error);
    res.status(500).json({ message: 'Erro interno do servidor.' });
  }
};

/**
 * Controlador para cadastrar um novo usuário.
 * POST /v1/user
 */
const createUserController = async (req, res) => {
  try {
    const { firstname, surname, email, password, confirmPassword } = req.body;

    // 1. Validação de campos obrigatórios
    if (!firstname || !surname || !email || !password || !confirmPassword) {
      return res.status(400).json({ message: 'Todos os campos obrigatórios devem ser preenchidos.' });
    }

    // 2. Validação de confirmação de senha
    if (password !== confirmPassword) {
      return res.status(400).json({ message: 'As senhas não coincidem.' });
    }

    // 3. Validação básica de formato de e-mail (opcional, mas recomendado)
    // Uma regex simples para validação de e-mail (pode ser mais robusta)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: 'Formato de e-mail inválido.' });
    }

    // 4. Chama o serviço para criar o usuário
    const newUser = await userService.createUser({ firstname, surname, email, password });

    // 5. Retorna 201 Created com os dados do novo usuário
    res.status(201).json(newUser);

  } catch (error) {
    console.error('Erro ao cadastrar usuário:', error);
    // Trata erros específicos do serviço (ex: e-mail já cadastrado)
    if (error.message === 'E-mail já cadastrado.') {
      return res.status(400).json({ message: error.message });
    }
    // Para outros erros não esperados, retorna 500
    res.status(500).json({ message: 'Erro interno do servidor ao cadastrar usuário.' });
  }
};

module.exports = {
  getUserByIdController,
  createUserController,
};
