const mongoose = require('mongoose');
const timestamp = require('mongoose-timestamp');
const Schema = mongoose.Schema;

const { DB: { COLLECTIONS : { USER } } } = require('../../helpers/constants');

const UserSchema = new Schema({
  profileUrl: String,
  fullName: String,
  description: String,
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
  university: Schema.ObjectId,
  gender: String,
  password: String,
  language: String,
  country: String,
  city: String,
  skills: [Schema.ObjectId],
  recommendations: [Schema.ObjectId],
  contacts: [Schema.ObjectId],
  socialNetworks: Array,
  savedJobs: [Schema.ObjectId],
  appliedJobs: [Schema.ObjectId],
  registeredDate: {
    type: Date,
    default: Date.now()
  }
});

UserSchema.plugin(timestamp);

module.exports = User = mongoose.model(USER, UserSchema, USER);
