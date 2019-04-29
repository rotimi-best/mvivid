const mongoose = require('mongoose');
const timestamp = require('mongoose-timestamp');
const Schema = mongoose.Schema;

const JobSchema = new Schema({
  title: String,
  companyId: ObjectId,
  salary: String,
  description: String,
  requirements: String,
  applicants: [ObjectId] // Id of Job applicant
});

JobSchema.plugin(timestamp);

module.exports = Job = mongoose.model('job', JobSchema);
