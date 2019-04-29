const mongoose = require('mongoose');
const timestamp = require('mongoose-timestamp');
const Schema = mongoose.Schema;

const ForumAnswerSchema = new Schema({
  forumQuestionId: ObjectId,
  answeredBy: ObjectId,
  answer: String,
  likes: Number
});

ForumAnswerSchema.plugin(timestamp);

module.exports = ForumAnswer = mongoose.model('forumAnswer', ForumAnswerSchema);
