const config = require("../../config");
const Client = require("ssh2").Client;

const createDirectory = caseId => new Promise((res, rej) => {
  const conn = new Client();
  conn.on("ready", () => {
    conn.sftp((err, sftp) => {
      if (err) {
        rej("Could not connect to remote server");
        return;
      }
      sftp.mkdir(config.serverUploadLocation + caseId, dirCreateError => {
        if (dirCreateError) {
          rej("Error in creating the directory");
          return;
        }
        res();
      });
    });
  }).connect(config.NASData);
});


module.exports = {
  createDirectory
};
