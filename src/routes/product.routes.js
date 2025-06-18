const express = require('express');
const productControllers = require('../controllers/product');
const { authMiddleware } = require('../middlewares/auth.middleware');

const router = express.Router();

// Rota para obter uma lista de produtos com filtros e paginação
router.get('/search', productControllers.searchProductsController);

// Rota para obter um produto pelo ID
router.get('/:id', productControllers.getProductByIdController);

// Rota para criar um novo produto
router.post('/', authMiddleware, productControllers.createProductController); 

// Rota para atualizar um produto existente
router.put('/:id', authMiddleware, productControllers.updateProductController); 

// Rota para deletar um produto pelo ID
router.delete('/:id', authMiddleware, productControllers.deleteProductController);

module.exports = router;