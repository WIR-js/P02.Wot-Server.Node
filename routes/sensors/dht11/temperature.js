var express = require('express');
var router = express.Router();
var resources = require('../../../resources/model');

router.get('/', function (req, res) {
    res.send(resources.pi.temprature);
});

module.exports = router;
