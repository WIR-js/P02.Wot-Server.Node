let resources = require('./../resources/model');let LED = resources.pi.actuators.leds;let GPIO = require('onoff').Gpio;let LEDActor = [];exports.start = function (params) {    connectHardware(params.LEDs);};exports.switching = function (led, value) {    let led_selected = Select_actuator(led, value);    if (value) {        led_selected.writeSync(1);        console.info(`%s is ON`, led.name);    } else {        led_selected.writeSync(0);        console.info(`%s is OFF`, led.name);    }};function connectHardware(leds) {    for (let i = 0; i < leds.length; i++) {        let pin = leds[i].gpio;        let GPIO = require('onoff').Gpio;        let actor = new GPIO(pin, 'out');        LEDActor.push({            gpio: pin,            actuator: actor        });        console.info(`Hardware LED gpio %s is started!`, pin);    }}function Select_actuator(led, value) {    for (var i = 0; i < LEDActor.length; i++) {        if (LEDActor[i].gpio === led.gpio) {            resources.pi.actuators.leds[++i].value = value;            console.log(LED[i]);            return LEDActor[--i].actuator;        }    }    console.info('LED is not found!');}exports.observe = function (model) {    return new Proxy(model, {        set: function (target, key, value) {            try {                console.log("led targer");                console.log(target);                if (key === 'value') {                    let led_selected = Select_actuator(target, value);                    if (value === "true") {                        led_selected.writeSync(1);                        console.info(`%s is ON`, target.name);                    } else {                        led_selected.writeSync(0);                        console.info(`%s is OFF`, target.name);                    }                }                return Reflect.set(target, key, value);            } catch (err) {                console.log(err);            }        }    });};