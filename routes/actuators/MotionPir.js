let express = require('express');let router = express.Router();let resources = require('../../resources/model');let ledplugin = require('../../plugins/leds');let alertLEDModel = resources.pi.actuators.leds["4"];router.get('/', function (req, res, next) {    req.result = resources.pi.sensors.PIR;    next();});router.route('/lock').get(function (req, res, next) {    req.result = resources.pi.sensors.PIR;    next();}).put(function (req, res, next) {    resources.pi.sensors.PIR.lock = req.body.value;    console.log(req.body.value);    if (!req.body.value) {       // ledplugin.blinkLED(0/*, ''*/);        ledplugin.switching( alertLEDModel, 0);        console.warn('security is disable');    } else {        console.warn('security is enable');    }    req.result = resources.pi.sensors.PIR;    next();});router.get('/log', function (req, res, next) {    res.sendFile('/home/pi/Wot/P02.Wot-Server.Node/security_LOG.txt')});module.exports = router;