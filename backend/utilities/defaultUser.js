const mongoose = require("mongoose");
const User = mongoose.model("User");

const createDefaultUser = () => {
  const admin = {};
  admin.username = "admin";
  admin.password = "password";
  admin.bio = "this is test bio for admin user";
  admin.website = "prathameshnetake.github.io";
  admin.avatarPath = "https://s3-ap-southeast-1.amazonaws.com/he-public-data/insta_52923b48.jpeg";
  User.findOneAndUpdate({username: "admin"}, admin, {upsert: true})
    .then(() => {
      global.logger.info("Default User is Updated");
    });
};

module.exports = {
  createDefaultUser
};

