const mongoose = require("mongoose");
const Post = mongoose.model("Post");

const deletePost = async (req, res, _next) => {
  Post.findById(req.body.id)
    .then(data => {
      console.log(data);
      if (data.likes.indexOf(req.user.username) === -1) {
        data.likes.push(req.user.username);
        console.log(data);
        data.save()
          .then(() => res.json({msg: "Done"}));
        return;
      }
      res.json({msg: "Already liked"});
    })
    .catch(err => _next(err));
};


module.exports = deletePost;
