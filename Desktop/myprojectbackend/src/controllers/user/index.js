// src/controllers/user/index.js
const { createUserController } = require('./create.controller');
const { getUserByIdController } = require('./getById.controller');
const { updateUserController } = require('./update.controller');
const { deleteUserController } = require('./delete.controller');
const { generateTokenController } = require('./generateToken');

module.exports = {
  createUserController,
  getUserByIdController,
  updateUserController,
  deleteUserController,
  generateTokenController
};