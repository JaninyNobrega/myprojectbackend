const express = require('express');
const userControllers = require('../controllers/user'); // Importa todos os controllers de usuário
const { authMiddleware } = require('../middlewares/auth.middleware');

const router = express.Router();

// Rota para obter informações de um usuário pelo ID (GET)
// GET /v1/user/:id
router.get('/:id', userControllers.getUserByIdController);

// Rota para cadastrar um novo usuário (POST)
// POST /v1/user
router.post('/', userControllers.createUserController);

// Rota para atualizar um usuário existente (PUT)
// PUT /v1/user/:id
router.put('/:id', authMiddleware, userControllers.updateUserController);

// Adicionar esta rota para deletar um usuário
// DELETE /v1/user/:id
router.delete('/:id', authMiddleware, userControllers.deleteUserController);

// Rota para gerar um token de autenticação (POST)
router.post('/token', userControllers.generateTokenController);

module.exports = router;