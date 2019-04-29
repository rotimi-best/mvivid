const mongoose = require('mongoose');
const timestamp = require('mongoose-timestamp');
const Schema = mongoose.Schema;

const ForumQuestionSchema = new Schema({
  question: String,
  askedBy: ObjectId,
  answers: [ObjectId],
  applause: Number
});

ForumQuestionSchema.plugin(timestamp);

module.exports = ForumQuestion = mongoose.model('forumQuestion', ForumQuestionSchema);
