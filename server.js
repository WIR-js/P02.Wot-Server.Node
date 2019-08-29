var httpServer = require('./server/http');
var wsServer = require('./server/websockets');
var dhtPlugin = require('./plugins/DHT11');
var LEDplugin = require("./plugins/leds");
var pirPligin = require('./plugins/pir');
var resources = require('./resources/model');
var LED = resources.pi.actuators.leds;

var server = httpServer.listen(1000);
console.log("HTTP server is running on http//127.0.0.1:1000");


wsServer.start(server);
LEDplugin.start({'frequency': 2000, 'LEDs': [LED[1], LED[2],LED[3],LED[4]] });
dhtPlugin.start({'hardware': true, 'frequency': resources.pi.sensors.DHT11.frequency});
pirPligin.start();



