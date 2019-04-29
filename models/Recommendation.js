const mongoose = require('mongoose');
const timestamp = require('mongoose-timestamp');
const Schema = mongoose.Schema;

const RecommendationSchema = new Schema({
  from: ObjectId,
  to: ObjectId,
  message: String,
  date: Date
});

RecommendationSchema.plugin(timestamp);

module.exports = Recommendation = mongoose.model('recommendation', RecommendationSchema);
