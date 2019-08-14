var WebSocketServer = require('ws').Server,
  resources = require('./../resources/model');

var ws;

var clients = [];

exports.start = (server) => {
     var wss = new WebSocketServer({server: server});
     
      wss.on('connection' , (socket) => {
           ws = socket;
           console.log('new websocket connection established on: ' + ws._socket.remoteAddress);
           
   });

  console.log('WebSocket server started...');
}




exports.send = function(data) {
  
 try {
   if(ws !== undefined && ws._receiver !== null){
    ws.send(data);
    console.log(`${data} is sent`);
     } 
  } catch (e) {
      console.log('websocket.send(): ' + e);
    }
  
}