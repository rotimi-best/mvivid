const mongoose = require('mongoose');
const timestamp = require('mongoose-timestamp');
const Schema = mongoose.Schema;

const { DB: { COLLECTIONS : { FORUM_ANSWER } } } = require('../../helpers/constants');

const ForumAnswerSchema = new Schema({
  forumQuestionId: Schema.ObjectId,
  answeredBy: Schema.ObjectId,
  answer: String,
  likes: Number
});

ForumAnswerSchema.plugin(timestamp);

module.exports = ForumAnswer = mongoose.model(FORUM_ANSWER, ForumAnswerSchema, FORUM_ANSWER);
