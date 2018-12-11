const chalk = require("chalk");

const log = msg => {
  console.log(chalk.blue(msg));
};

const error = err => {
  console.log(chalk.bold.red(err));
};

const info = msg => {
  console.log(chalk.blue(msg));
};

module.exports = {
  log,
  error,
  info
};

