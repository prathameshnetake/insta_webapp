const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  imagePath: {
    type: String
  },
  user: {
    type: String
  },
  sysPath: {
    type: String
  },
  likes: [String]
});

const User = mongoose.model("Post", UserSchema, "Post");

module.exports = User;
