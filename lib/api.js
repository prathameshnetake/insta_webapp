const axios = require("axios");


const api = {
  doPostRequest: (url, data) => axios.post(url, data),
  doGetRequest: url => axios.get(url)
};

export default api;
