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
    console.log('---->', req.body)
    models.create(req.body, (err, data) => {
      if(err) {
        res.sendStatus(404);
      } else {
        res.sendStatus(201);
      }
    })
  }
}