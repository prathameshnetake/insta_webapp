const express = require("express");
const router = new express.Router();
const create = require("./create");
const deletePost = require("./delete");
const read = require("./read");
const count = require("./count");
const userPosts = require("./userPosts");
const like = require("./like");

router.post("/create", create);
router.post("/delete", deletePost);
router.post("/read", read);
router.post("/count", count);
router.post("/userPosts", userPosts);
router.post("/like", like);

module.exports = router;
