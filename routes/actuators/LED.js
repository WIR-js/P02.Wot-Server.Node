let express = require('express');
let router = express.Router();
let resources = require('../../resources/model');
let ledplugin = require('../../plugins/leds');

/*
url: ip:port/pi/actuators/leds/
method: get
body: ----
params: ----
action: send property of leds
 */

router.route('/').get(function (req, res, next) {
    req.result = resources.pi.actuators.leds;
    next();
});

/*
url: ip:port/pi/actuators/leds/:id
method: get,put
body: value: true or false
params: numeric(1 to 4 )
action: get method : send property of selected led
        put method : can off or on selected led and send property
 */

router.route('/:id').get(function (req, res, next) {
    req.result = resources.pi.actuators.leds[req.params.id];
    next();
}).put(function (req, res, next) {
    switch (req.body.value) {
        case 'true':
            ledplugin.observe(resources.pi.actuators.leds[req.params.id]).value = true;
            break;
        case 'false':
            ledplugin.observe(resources.pi.actuators.leds[req.params.id]).value = false;
            break;
    }
    req.result = resources.pi.actuators.leds[req.params.id];
    next();
});
module.exports = router;