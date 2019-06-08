const mongoose = require('mongoose');
const timestamp = require('mongoose-timestamp');
const Schema = mongoose.Schema;

const { DB: { COLLECTIONS : { RECOMMENDATION } } } = require('../../helpers/constants');

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

module.exports = Recommendation = mongoose.model(RECOMMENDATION, RecommendationSchema, RECOMMENDATION);
