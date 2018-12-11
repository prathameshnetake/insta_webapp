const mongoose = require("mongoose");
const Post = mongoose.model("Post");

const newPost = async (req, res, _next) => {
  Post.find({})
    .then(data => {
      res.json({posts: data});
    })
    .catch(err => _next(err));
};


module.exports = newPost;
