const mongoose = require("mongoose");
const Post = mongoose.model("Post");
const formidable = require("formidable");
const uuid = require("uuid").v4;
const fs = require("fs-extra");
const PROJECT_DIR = require("../../../config").PROJECT_DIR;
const path = require("path");

const newPost = async (req, res, _next) => {
  const form = new formidable.IncomingForm();
  form.maxFileSize = 10000 * 1024 * 1024; // MAX upload size is now 10GB
  form.parse(req, err => {
    if (err) {
      _next("Error in parsing the file");
    }
  });

  form.on("field", function(name, field) {
    this[name] = field;
  });

  form.on("end", async function () {
    const fileName = `${uuid()}_${this.openedFiles[0].name}`;
    const destPath = path.join(PROJECT_DIR, "static", fileName);
    const relPath = `/static/${fileName}`;
    fs.moveSync(this.openedFiles[0].path, destPath);
    const post = new Post();
    post.user = this.user;
    post.imagePath = relPath;
    post.sysPath = destPath;
    post.likes = [];
    post.save()
      .then(() => res.json({msg: "Post is created"}))
      .catch(err => _next(err));
  });
  form.on("error", () => {
    _next("Error in uploading the file");
  });
};


module.exports = newPost;
