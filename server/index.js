const express = require('express');
const app = express();
const PORT = 3000 || process.env.PORT;

const controller = require('./controllers/movies.js');

app.use(express.json());
app.use(express.static('client/dist'));

app.get('/api/movies', controller.get);

app.post('/api/movies', controller.post);

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})