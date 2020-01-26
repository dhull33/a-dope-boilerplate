const express = require('express');

const app = express();

/* GET home page. */
app.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});

module.exports = app;
