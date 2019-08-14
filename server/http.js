var express = require('express');
var routes = require('../routes/routes');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');
var converter = require('../middleWare/converter');

app.use(bodyParser.json()).get(function(req ,res, next){
next();
});
app.use(bodyParser.urlencoded({ extended: false })).get(function(req ,res, next){
    next();
});
app.use(cors()).get(function(req ,res, next){
next();
});
app.use('/pi' , routes);
app.use(converter()).get(function(req ,res, next){
next();
});

module.exports = app;