const CompanyModel = require('../models/Company');
const { DB: { COLLECTIONS : { COMPANY } } } = require('../../helpers/constants');

module.exports = {
  addCompany: data => require('./templates/create')(CompanyModel, COMPANY, data),
  getCompany: (findFields = {}, sortFields = null, limitNo = null) => {
    return require('./templates/read')(CompanyModel, COMPANY, findFields, sortFields, limitNo);
  },
  updateCompany: (findField, setField) => require('./templates/update')(CompanyModel, COMPANY, findField, setField),
  deleteCompany: findField => require('./templates/delete')(CompanyModel, COMPANY, findField)
};
