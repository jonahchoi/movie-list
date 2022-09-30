const router = require('express').Router();
const controller = require('./controllers/movies.js');

router.get('/', controller.get);

router.post('/', controller.post);

router.put('/', controller.put);

module.exports = router;