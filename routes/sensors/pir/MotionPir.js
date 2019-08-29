let express = require('express');let router = express.Router();let resources = require('../../../resources/model');let ledplugin = require('../../../plugins/leds');let pirplugin = require('../../../plugins/pir');let alertLEDModel = resources.pi.actuators.leds["4"];/*url: ip:port/pi/sensors/pir/method: getbody: -----params: ----action: send property of pir */router.get('/', function (req, res, next) {    req.result = resources.pi.sensors.PIR;    next();});/*url: ip:port/pi/sensors/dht11/lockmethod: get,putbody: value: true or falseparams: ----action: can on or off security and send property of pir */router.route('/lock').get(function (req, res, next) {    req.result = resources.pi.sensors.PIR;    next();}).put(function (req, res, next) {    resources.pi.sensors.PIR.lock = req.body.lock;    pirplugin.proxy_model_pir().lock = req.body.lock;    req.result = resources.pi.sensors.PIR;    next();});/*url: ip:port/pi/sensors/dht11/logmethod: getbody: ----params: ----action: send log file */router.get('/log', function (req, res, next) {    res.sendFile('/home/pi/Wot/P02.Wot-Server.Node/security_LOG.txt')});module.exports = router;