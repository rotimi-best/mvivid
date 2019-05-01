const mongoose = require('mongoose');
const timestamp = require('mongoose-timestamp');
const Schema = mongoose.Schema;

const JobSchema = new Schema({
  title: String,
  city: String,
  companyId: Schema.ObjectId,
  recruiterId: Schema.ObjectId,
  salary: String,
  description: String,
  requirements: String,
  applicants: [Schema.ObjectId],
  category: Schema.ObjectId
});

JobSchema.plugin(timestamp);

module.exports = Job = mongoose.model('job', JobSchema);
