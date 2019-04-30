const mongoose = require('mongoose');
const timestamp = require('mongoose-timestamp');
const Schema = mongoose.Schema;

const JobApplicantSchema = new Schema({
  userId: Schema.ObjectId,
  jobId: Schema.ObjectId,
  resumeUrl: String,
  message: String
});

JobApplicantSchema.plugin(timestamp);

module.exports = JobApplicant = mongoose.model('jobApplicant', JobApplicantSchema);
