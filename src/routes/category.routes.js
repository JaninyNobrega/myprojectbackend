const express = require('express');
const categoryControllers = require('../controllers/category');
const { authMiddleware } = require('../middlewares/auth.middleware');

const router = express.Router();

// Rota para obter uma lista de categorias com filtros
router.get('/search', categoryControllers.searchCategoriesController);

// Rota para obter uma categoria por ID <-- ADICIONE ESTA ROTA
router.get('/:id', categoryControllers.getCategoryByIdController);

// Rota para criar uma nova categoria
router.post('/', categoryControllers.createCategoryController); 

// Rota para atualizar uma categoria existente
router.put('/:id', authMiddleware, categoryControllers.updateCategoryController);

// Rota para deletar uma categoria existente
router.delete('/:id', categoryControllers.deleteCategoryController);
router.delete('/:id', authMiddleware, categoryControllers.deleteCategoryController);


module.exports = router;