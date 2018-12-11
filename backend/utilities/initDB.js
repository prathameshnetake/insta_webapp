// initialise any mongo work in here

// require models
require("../models/Post");
require("../models/User");

const mongoose = require("mongoose");
const config = require("../../config");
mongoose.Promise = require("bluebird");

const dbString = `mongodb://${config.dbUsername ? `${config.dbUsername}:` : ""}${config.dbPassword ? `${config.dbPassword}@` : ""}${config.dbUrl}:${config.dbPort}/${config.dbName}`;

module.exports = () => new Promise((res, rej) => {
  mongoose.connect(dbString)
    .then(() => {
      res("Connected to MongoDB and it is ready to use now!!!");
    })
    .catch(rej);
});
