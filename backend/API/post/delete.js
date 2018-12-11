const mongoose = require("mongoose");
const Post = mongoose.model("Post");
const fs = require("fs-extra");

const deletePost = async (req, res, _next) => {
  Post.findByIdAndRemove(req.body.id)
    .then(data => {
      fs.unlinkSync(data.sysPath);
      res.json({msg: "Deleted"});
    })
    .catch(err => _next(err));
};


module.exports = deletePost;
