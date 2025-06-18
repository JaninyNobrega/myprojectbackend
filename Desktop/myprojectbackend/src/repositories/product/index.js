const { searchProductsRepository } = require('./search.repository');
const { getProductByIdRepository } = require('./getById.repository');
const { createProductRepository } = require('./create.repository');

module.exports = {
  searchProductsRepository,
  getProductByIdRepository,
  createProductRepository
};