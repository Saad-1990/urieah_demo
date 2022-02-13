const express = require('express');

const app = express();
const http = require('http');

/**
 * NOTE 
 * In order to run the websocket server an http server is required to which we can bind the socket server.
 * After binding it enables web-sockets protocol on the provided httpServer
 * Initially an http server is also requred to send the client files where all the logic to connect to socket server must be present for that we're using index.html as our default file.
 */
const server = http.createServer(app);

const PORT = 8000;




app.get('/', (req, res) => {

  /**
   * Sends the HTML to the client where all the client side stuff for generating the event and connecting to server has been handled
   */
  res.sendFile(__dirname + '/views/index.html');
});

server.listen(PORT, () => {
  console.log(`listening on localhost:${PORT}`);
});

module.exports.server