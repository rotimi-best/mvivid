const mongoose = require('mongoose');
const timestamp = require('mongoose-timestamp');
const Schema = mongoose.Schema;

const { DB: { COLLECTIONS : { UNIVERSITY } } } = require('../../helpers/constants');

const UniversitySchema = new Schema({
  name: String,
  country: String,
  students: Array
});

UniversitySchema.plugin(timestamp);

module.exports = University = mongoose.model(UNIVERSITY, UniversitySchema, UNIVERSITY);
