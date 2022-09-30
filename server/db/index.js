const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'movieList',
  password: 'root'
})

exports.db = db;