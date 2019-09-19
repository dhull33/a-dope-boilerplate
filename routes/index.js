const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

/* GET home page. */
app.get('/', (req, res) => res.render('index', { title: 'Express' }));

module.exports = app;
