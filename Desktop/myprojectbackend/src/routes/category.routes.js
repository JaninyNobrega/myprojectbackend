const express = require('express');
const categoryControllers = require('../controllers/category');

const router = express.Router();

// Rota para obter uma lista de categorias com filtros
router.get('/search', categoryControllers.searchCategoriesController);

module.exports = router;