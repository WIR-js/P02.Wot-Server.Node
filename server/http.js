var express = require('express');
var routes = require('../routes/routes');
var app = express();
var cors = require('cors');

app.use(cors());
app.use('/pi' , routes);
app.get('/pi' , function(){
    res.send('Welcome to PI!');
});


module.exports = app;