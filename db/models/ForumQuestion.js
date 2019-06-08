const mongoose = require('mongoose');
const timestamp = require('mongoose-timestamp');
const Schema = mongoose.Schema;

const { DB: { COLLECTIONS : { FORUM_QUESTION } } } = require('../../helpers/constants');

const ForumQuestionSchema = new Schema({
  title: String,
  question: String,
  askedBy: Schema.ObjectId,
  answers: [Schema.ObjectId],
  applause: Number,
  tags: [String]
});

ForumQuestionSchema.plugin(timestamp);

module.exports = ForumQuestion = mongoose.model(FORUM_QUESTION, ForumQuestionSchema, FORUM_QUESTION);
