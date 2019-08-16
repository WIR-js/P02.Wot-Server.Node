let express = require('express');
let router = express.Router();
let resources = require('../../resources/model');
let ledplugin = require('../../plugins/leds');
let observe = function (model) {
    return new Proxy(model, {
        set: function (target, key, value) {
            try {
                if (key === 'value') {
                    console.log(target);
                    console.log("led value" + value);
                    // led_selected = Select_actuator(target, value);
                    if (value) {
                        //  led_selected.writeSync(1);
                        console.info(`%s is ON`, target.name);
                    } else {
                        //    led_selected.writeSync(0);
                        console.info(`%s is OFF`, target.name);
                    }
                }
                return Reflect.set(target, key, value);
            } catch (err) {
                console.log(err);
            }
        }
    });
};

router.route('/').get(function (req, res, next) {
    req.result = resources.pi.actuators.leds;
    next();
});

router.route('/:id').get(function (req, res, next) {
    req.result = resources.pi.actuators.leds[req.params.id];
    next();
}).put(function (req, res, next) {
    console.log(resources.pi.actuators.leds[req.params.id]);
    let selected_led = observe(resources.pi.actuators.leds[req.params.id]);
    selected_led.value = req.body.value;
    req.result = selected_led;
    next();
});
module.exports = router;