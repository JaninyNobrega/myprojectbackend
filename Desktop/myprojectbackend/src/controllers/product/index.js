const { searchProductsController } = require('./search.controller');
const { getProductByIdController } = require('./getById.controller');
const { createProductController } = require('./create.controller');

module.exports = {
  searchProductsController,
  getProductByIdController,
  createProductController,
};