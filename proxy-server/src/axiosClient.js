const axios = require('axios');

module.exports = {
  get: async (url) => {
    return await axios({
      url,
      method: 'GET',
    });
  },

  post: async (url, data) => {
    return await axios({
      url,
      method: 'POST',
      data,
    });
  },

  patch: async (url, data) => {
    return await axios({
      url,
      method: 'PATCH',
      data,
    });
  },

  delete: async (url, data) => {
    return await axios({
      url,
      method: 'DELETE',
      data,
    });
  },
};
