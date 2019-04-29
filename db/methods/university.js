const UniversityModel = require('../models/University');
const { DB: { COLLECTIONS : { UNIVERSITY } } } = require('../../helpers/constants');

module.exports = {
  addUniversity: data => require('./templates/create')(UniversityModel, UNIVERSITY, data),
  getUniversity: (findFields, sortFields = null) => {
    return require('./templates/read')(UniversityModel, UNIVERSITY, findFields, sortFields);
  },
  updateUniversity: (findField, setField) => require('./templates/update')(UniversityModel, UNIVERSITY, findField, setField),
  deleteUniversity: findField => require('./templates/delete')(UniversityModel, UNIVERSITY, findField)
};
