const { createUserRepository } = require('./create.repository');
const { getUserByIdRepository } = require('./getById.repository');
const { updateUserRepository } = require('./update.repository');
const { deleteUserRepository } = require('./delete.repository');
const  { findUserByCredentials } = require('./findByCredentials')


module.exports = {
  createUserRepository,
  getUserByIdRepository,
  updateUserRepository,
  deleteUserRepository,
  findUserByCredentials
};