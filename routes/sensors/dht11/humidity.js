var express = require('express');
var router = express.Router();
var resources = require('../../../resources/model');

router.get('/', function(req, res , next){
  res.send(resources.pi);
});



module.exports = router;


