var httpServer = require('./server/http');
var server = httpServer.listen(8000);
var dhtPlugin = require('./plugins/DHT11');
dhtPlugin = require('./plugins/DHT22SensorPlugin');

dhtPlugin.start({'simulate': true, 'frequency': 10000});
console.log("http//127.0.0.1:8000");


