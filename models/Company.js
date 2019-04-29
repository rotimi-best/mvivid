const mongoose = require('mongoose');
const timestamp = require('mongoose-timestamp');
const Schema = mongoose.Schema;

const CompanySchema = new Schema({
  name: String,
  location: String,
  description: String,
  website: String
});

CompanySchema.plugin(timestamp);

module.exports = Company = mongoose.model('company', CompanySchema);
