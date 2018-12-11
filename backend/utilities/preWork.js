const dbWork = require("../utilities/initDB");
const logger = require("../utilities/logger");

module.exports = () => new Promise((resolve, reject) => {
  // add logger to global scope
  global.logger = logger;
  const promises = [];
  promises.push(dbWork());
  Promise.all(promises)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      reject(`Error while doing Prework Stuff ERR ==> ${err}`);
    });
  resolve("Some");
});

