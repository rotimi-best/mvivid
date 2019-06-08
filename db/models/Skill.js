const mongoose = require('mongoose');
const timestamp = require('mongoose-timestamp');
const Schema = mongoose.Schema;

const { DB: { COLLECTIONS : { SKILL } } } = require('../../helpers/constants');

const SkillSchema = new Schema({
  name: String
});

SkillSchema.plugin(timestamp);

module.exports = Skill = mongoose.model(SKILL, SkillSchema, SKILL);
