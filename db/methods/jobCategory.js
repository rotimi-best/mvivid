const JobCategoryModel = require('../models/JobCategory');
const { DB: { COLLECTIONS : { JOB_CATEGORY } } } = require('../../helpers/constants');

module.exports = {
  addJobCategory: data => require('./templates/create')(JobCategoryModel, JOB_CATEGORY, data),
  getJobCategory: (findFields = {}, sortFields = null, limitNo = null) => {
    return require('./templates/read')(JobCategoryModel, JOB_CATEGORY, findFields, sortFields, limitNo);
  },
  updateJobCategory: (findField, setField) => require('./templates/update')(JobCategoryModel, JOB_CATEGORY, findField, setField),
  deleteJobCategory: findField => require('./templates/delete')(JobCategoryModel, JOB_CATEGORY, findField)
};
