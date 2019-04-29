const mongoose = require('mongoose');
const timestamp = require('mongoose-timestamp');
const Schema = mongoose.Schema;

const SkillSchema = new Schema({
  name: String
});

SkillSchema.plugin(timestamp);

module.exports = Skill = mongoose.model('skill', SkillSchema);
