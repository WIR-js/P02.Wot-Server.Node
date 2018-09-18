var express = require('express');
var router = express.Router();
resources = require('./../resources/model');

router.use('/sensors/dht11/temperature' , require('./sensors/dht11/temperature') );
router.use('/sensors/dht11/humidity', require('./sensors/dht11/humidity') );


module.exports = router;