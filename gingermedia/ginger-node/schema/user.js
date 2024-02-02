var mongoose = require("mongoose"),
  Schema = mongoose.Schema;

var userSchema = new Schema({
  userId: {
    type: String,
    trim: true,
  },
  password: {
    type: String,
  },
  age: {
    type: Number,
  },
  dob: {
    type: Date,
  },
  contact: {
    type: Number,
  },
  name: {
    type: String,
  },
});
const users = mongoose.model("users", userSchema);
module.exports = users;
