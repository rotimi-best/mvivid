const mongoose = require('mongoose');
const timestamp = require('mongoose-timestamp');
const Schema = mongoose.Schema;

const JobCategorySchema = new Schema({
  name: String
});

JobCategorySchema.plugin(timestamp);

module.exports = JobCategory = mongoose.model('jobCategory', JobCategorySchema);
