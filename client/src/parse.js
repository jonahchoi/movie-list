var axios = require('axios');

module.exports = {
  readAll: function(callback) {
    axios.get('/api/movies')
      .then((data) => callback(data.data))
      .catch((err) => console.error(err));
  },

  create: function(movie, callback) {
    axios.post('/api/movies', movie)
      .then((data) => callback(data.data))
      .catch((err) => console.error(err));
  },

  update: function(id, watched, callback) {
    axios.put('/api/movies', {id, watched})
      .then((data) => callback(data.data))
      .catch((err) => console.error(err));
  }
}