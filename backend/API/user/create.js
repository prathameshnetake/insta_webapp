const mongoose = require("mongoose");
const User = mongoose.model("User");
const formidable = require("formidable");
const uuid = require("uuid").v4;
const fs = require("fs-extra");
const PROJECT_DIR = require("../../../config").PROJECT_DIR;
const path = require("path");

const register = async (req, res, _next) => {
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
    const user = new User();
    user.username = this.username;
    user.password = this.password;
    user.bio = this.bio;
    user.website = this.website;
    user.avatarPath = relPath;
    user.save()
      .then(() => res.json({msg: "New user is created"}))
      .catch(err => _next(err));
  });
  form.on("error", () => {
    _next("Error in uploading the file");
  });
};


module.exports = register;
