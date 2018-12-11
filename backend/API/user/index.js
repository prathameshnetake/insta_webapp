const express = require("express");
const router = new express.Router();
const create = require("./create");
router.post("/create", create);

module.exports = router;
