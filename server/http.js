var express = require('express');
var routes = require('../routes/routes');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');
var converter = require('./../middleware/converter');

app.use(bodyParser.json());
app.use(cors());
app.use('/pi' , routes);
app.use(converter());

module.exports = app;