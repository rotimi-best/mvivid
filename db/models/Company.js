const mongoose = require('mongoose');
const timestamp = require('mongoose-timestamp');
const Schema = mongoose.Schema;

const { DB: { COLLECTIONS : { COMPANY } } } = require('../../helpers/constants');

const CompanySchema = new Schema({
  name: String,
  location: String,
  description: String,
  website: String,
  industry: String,
  phone: String
});

CompanySchema.plugin(timestamp);

module.exports = Company = mongoose.model(COMPANY, CompanySchema, COMPANY);
