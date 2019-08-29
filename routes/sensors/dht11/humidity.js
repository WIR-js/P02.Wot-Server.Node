var express = require('express');
var router = express.Router();
var resources = require('../../../resources/model');
/*
url: ip:port/pi/sensors/dht11/humidity
method: get
body: -----
params: ----
action: send humidity property of  dht11 sensor
 */

router.get('/', function (req, res,next) {
   req.result=resources.pi.sensors.DHT11.humidity;
   next()
});


module.exports = router;


