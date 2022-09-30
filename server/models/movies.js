const {db} = require('../db');

module.exports = {
  getAll: function(callback) {
    db.query('SELECT * FROM movies', (err, data) => {
      if(err) {
        callback(err);
      }
      else {
        callback(null, data);
      }
    });
  },

  create: function(movie, callback) {
    db.query('INSERT INTO movies (title) VALUES (?)', [movie.title], (err, data) => {
      if(err) {
        callback(err);
      } else {
        module.exports.getAll(callback);
      }
    });
  },

  update: function(id, watched, callback) {
    db.query('UPDATE movies SET watched = ? WHERE id = ?', [watched, id], (err, data) => {
      if(err) {
        callback(err);
      } else {
        module.exports.getAll(callback);
      }
    });
  }
}