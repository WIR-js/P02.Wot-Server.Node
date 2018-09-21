var httpServer = require('./server/http');
var server = httpServer.listen(8000);
var dhtPlugin = require('./plugins/DHT11');


console.log("http//127.0.0.1:8000");
dhtPlugin.start({'hardware': true, 'frequency': 3000});


 