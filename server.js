var httpServer = require('./server/http');
var server = httpServer.listen(8000);
var dhtPlugin = require('./plugins/DHT11');
var LEDplugin = require("./plugins/leds")
var resources = require('./resources/model');
var LED = resources.pi.actuators.leds;

console.log("http//127.0.0.1:8000");

dhtPlugin.start({'hardware': true, 'frequency': 3000});
LEDplugin.start({'frequency': 2000, 'LEDs': [LED[1], LED[2]] });

 