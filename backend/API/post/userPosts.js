const mongoose = require("mongoose");
const Post = mongoose.model("Post");

const deletePost = async (req, res, _next) => {
  Post.find({user: req.body.user})
    .then(data => {
      res.json({posts: data});
    })
    .catch(err => _next(err));
};


module.exports = deletePost;
