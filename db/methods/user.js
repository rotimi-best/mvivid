const UserModel = require('../models/User');
const { DB: { COLLECTIONS : { USER } } } = require('../../helpers/constants');

module.exports = {
  addUser: data => require('./templates/create')(UserModel, USER, data),
  getUser: (findFields, sortFields = null) => {
    return require('./templates/read')(UserModel, USER, findFields, sortFields);
  },
  updateUser: (findField, setField) => require('./templates/update')(UserModel, USER, findField, setField),
  deleteUser: findField => require('./templates/delete')(UserModel, USER, findField)
};
