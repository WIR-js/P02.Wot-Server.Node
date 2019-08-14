let resources = require('../resources/model');let fs = require('fs');let wsServer = require('../server/websockets');let ledplugin = require('../plugins/leds');let interval, sensor;let pirModel = resources.pi.sensors.PIR;let alertLEDModel = resources.pi.actuators.leds["4"];let pluginName = resources.pi.sensors.PIR.name;let observe = function (model) {    return new Proxy(model, {        set: function (target, key, value) {            try {                console.log(target);                console.log(target.lock);                console.log(key);                console.log(value);                if (target.lock) {                    console.log('security is ON');                    if (alertLEDModel.value === false) {                        if (key === 'value') {                            pirModel.value = value;                            switch (value) {                                case true :                                    ledplugin.switching(alertLEDModel, false);                                    console.warn('nobody is here');                                    break;                                case false:                                    ledplugin.switching(alertLEDModel, true);                                    console.warn('someone is here');                                    break;                            }                            showValue();                        }                    } else {                        console.log('alert is enabled and somepone is here. led alert cant off  ');                    }                } else {                    ledplugin.switching(alertLEDModel, false);                    console.log('security is OFF');                }                Reflect.set(target, key, value);            } catch (err) {                console.log(err)            }        }    });};let proxy_model = observe(pirModel);exports.start = function () {    connectHardware();};function connectHardware() {    var Gpio = require('onoff').Gpio;    sensor = new Gpio(pirModel.gpio, 'in', 'both');    sensor.watch(function (err, value) {        if (err) {            exit(err);        }        proxy_model.value = !!value;    });    console.info('Hardware %s sensor started!', pluginName);}function showValue() {    let d = new Date();    let motion = pirModel.value ? 'there is someone!' : 'not anymore!';    let log = d + ': ' + motion + '\n';    fs.appendFile('security_LOG.txt', log, function (err) {        if (err) throw err    });    //console.log(log)}