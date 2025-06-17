// src/controllers/user/index.js
const { createUserController } = require('./create.controller');
const { getUserByIdController } = require('./getById.controller');
const { updateUserController } = require('./update.controller');
const { deleteUserController } = require('./delete.controller');

module.exports = {
  createUserController,
  getUserByIdController,
  updateUserController,
  deleteUserController,
};