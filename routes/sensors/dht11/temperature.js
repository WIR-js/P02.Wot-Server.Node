var express = require('express');
var router = express.Router();
var resources = require('../../../resources/model');

router.get('/', function (req, res, next) {
    req.result = resources.pi.sensors.DHT11.temperature;
    //console.info('temperature is: ',resources.pi.sensors.temperature);
    next();
});

router.put('/alertValue' ,function(req, res, next){
     resources.pi.sensors.DHT11.temperature.alertValue = req.body.value;
     req.result = resources.pi.sensors.DHT11.temperature;
     next();
});


module.exports = router;
