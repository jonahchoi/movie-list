var express = require('express');
var morgan = require('morgan');

var router = require('./routes.js');

const app = express();
const PORT = 3000 || process.env.PORT;

app.use(morgan('dev'));
app.use(express.json());
app.use(express.static('client/dist'));

app.use('/api/movies', router);

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})