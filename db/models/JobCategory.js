const mongoose = require('mongoose');
const timestamp = require('mongoose-timestamp');
const Schema = mongoose.Schema;

const { DB: { COLLECTIONS : { JOB_CATEGORY } } } = require('../../helpers/constants');

const JobCategorySchema = new Schema({
  name: String
});

JobCategorySchema.plugin(timestamp);

module.exports = JobCategory = mongoose.model(JOB_CATEGORY, JobCategorySchema, JOB_CATEGORY);
