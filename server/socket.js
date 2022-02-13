const httpServer = require('./http'); 

const { Server } = require("socket.io");


const io = new Server(httpServer);

/**
 * @NOTE
 * Notice that I initialize a new instance of socket.io by passing the server (the HTTP server) object. 
 * Then I listen on the connection event for incoming sockets and log it to the console.
 */

io.on('connection', (socket) => {
  console.log('a user connected');
});