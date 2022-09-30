const models = require('../models/movies.js');

module.exports = {
  get: function(req, res) {
    models.getAll((err, data) => {
      if(err) {
        res.sendStatus(404);
      } else {
        console.log(data);
        res.status(200).json(data);
      }
    })
  },

  post: function(req, res) {
    models.create(req.body, (err, data) => {
      if(err) {
        res.sendStatus(404);
      } else {
        // console.log(data);
        res.status(201).json(data);
      }
    })
  },

  put: function(req, res) {
    models.update(req.body.id, req.body.watched, (err, data) => {
      if(err) {
        res.sendStatus(404);
      } else {
        res.status(200).json(data);
      }
    })
  }
}