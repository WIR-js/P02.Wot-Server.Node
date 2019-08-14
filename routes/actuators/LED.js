let express = require('express');
let router = express.Router();
let resources = require('../../resources/model');
let ledplugin = require('../../plugins/leds');
/*
let observe = function (model) {
    return new Proxy(model, {
        set: function (target, key, value) {
            let ledplugin = require('../../plugins/leds');
            try {
                ledplugin.switching(target, value);
                return Reflect.set(target, key, value);
            } catch (err) {
                console.log(err);
            }
        }
    });
};
*/

router.route('/').get(function (req, res, next) {
    req.result = resources.pi.actuators.leds;
    next();
});

router.route('/:id').get(function (req, res, next) {
    req.result = resources.pi.actuators.leds[req.params.id];
    next();
}).put(function (req, res, next) {
    let selected_led = ledplugin.observe(resources.pi.actuators.leds[req.params.id]);
    selected_led.value = req.body.value;
    req.result = selected_led;
    next();
});
module.exports = router;