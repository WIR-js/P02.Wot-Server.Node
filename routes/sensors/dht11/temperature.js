var express = require('express');
var router = express.Router();
var resources = require('../../../resources/model');

router.get('/', function (req, res, next) {
    req.result = resources.pi.sensors.temperature;
    //console.info('temperature is: ',resources.pi.sensors.temperature);
    next();
});

router.put('/alertValue' ,function(req, res, next){
     resources.pi.sensors.temperature.alertValue = req.body.value;
     req.result = resources.pi.sensors.temperature;
     next();
});


module.exports = router;
