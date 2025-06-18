const { searchProducts } = require('./search.service');
const { getProductById } = require('./getById.service');
const { createProduct } = require('./create.service');

module.exports = {
  searchProducts,
  getProductById,
  createProduct
};