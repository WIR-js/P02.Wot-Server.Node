var express = require('express');
var router = express.Router();
var resources = require('../../../resources/model');
/*
url: ip:port/pi/sensors/dht11/temperature/
method: get
body: ----
params: ----
action: send temperature property of  dht11 sensor
 */

router.get('/', function (req, res, next) {
    req.result = resources.pi.sensors.DHT11.temperature;
    next();
});

/*
url: ip:port/pi/sensors/dht11/temperature/alertValue
method: put
body: value: numeric
params: ----
action: can change alertValue and send temperature property of  dht11 sensor
 */

router.put('/alertValue' ,function(req, res, next){
    resources.pi.sensors.DHT11.temperature.alertValue = req.body.value;
    req.result = resources.pi.sensors.DHT11.temperature;
    next();
});


module.exports = router;
