const JobApplicantModel = require('../models/JobApplicant');
const { DB: { COLLECTIONS : { JOB_APPLICANT } } } = require('../../helpers/constants');

module.exports = {
  addJobApplicant: data => require('./templates/create')(JobApplicantModel, JOB_APPLICANT, data),
  getJobApplicant: (findFields = {}, sortFields = null, limitNo = null) =>
    require('./templates/read')(JobApplicantModel, JOB_APPLICANT, findFields, sortFields, limitNo),
  updateJobApplicant: (findField, setField) => require('./templates/update')(JobApplicantModel, JOB_APPLICANT, findField, setField),
  deleteJobApplicant: findField => require('./templates/delete')(JobApplicantModel, JOB_APPLICANT, findField)
};
