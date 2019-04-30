const mongoose = require('mongoose');
const timestamp = require('mongoose-timestamp');
const Schema = mongoose.Schema;

const RecommendationSchema = new Schema({
  from: {
    id: Schema.ObjectId,
    username: String
  },
  to: {
    id: Schema.ObjectId,
    username: String
  },
  message: String,
  date: {
    type: Date,
    default: Date.now()
  }
});

RecommendationSchema.plugin(timestamp);

module.exports = Recommendation = mongoose.model('recommendation', RecommendationSchema);
