const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String
  },
  password: {
    type: String
  },
  bio: {
    type: String
  },
  website: {
    type: String
  },
  avatarPath: {
    type: String
  }
});

const User = mongoose.model("User", UserSchema, "User");

module.exports = User;
