const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const events = require('../routes/rutas');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'aulavirtualsep',
  port: '3306'
});


connection.connect(function (err) {
  if (err) throw err;
  console.log("Conectado");
});

const port = process.env.PORT || 3000;

const app = express()
  .use(cors())
  .use(bodyParser.json())
  .use(events(connection))
  .use(bodyParser.urlencoded({ extended: false }));

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  next();
});

app.use(bodyParser.urlencoded({extended:false}));

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});



