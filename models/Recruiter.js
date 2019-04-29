const mongoose = require('mongoose');
const timestamp = require('mongoose-timestamp');
const Schema = mongoose.Schema;

const RecruiterSchema = new Schema({
  fullName: String,
  companyId: ObjectId,
  jobsPosted: [ObjectId] // Ids of jobs model
});

RecruiterSchema.plugin(timestamp);

module.exports = Recruiter = mongoose.model('recruiter', RecruiterSchema);
