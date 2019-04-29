const mongoose = require('mongoose');
const timestamp = require('mongoose-timestamp');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  fullName: String,
  userName: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  university: ObjectId,
  gender: String,
  language: String,
  country: String,
  city: String,
  skills: [ObjectId],
  recommendations: [ObjectId],
  contacts: [ObjectId],
  socialNetworks: Array,
  savedJobs: [ObjectId],
  appliedJobs: [ObjectId],
  registeredDate: {
    type: Date,
    default: Date.now()
  }
});

UserSchema.plugin(timestamp);

module.exports = User = mongoose.model('user', UserSchema);
