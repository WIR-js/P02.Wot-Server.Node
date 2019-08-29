var express = require('express');
var router = express.Router();
var resources = require('../../../resources/model');

router.get('/', function (req, res,next) {
   req.result=resources.pi.sensors.DHT11.humidity;
   next()
});


module.exports = router;


