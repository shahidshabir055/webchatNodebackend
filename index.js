const { Server } = require("socket.io");
const http = require('http');
const express = require('express');
const app = express();

const httpServer = http.createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:4200",
  }
 
  
})
httpServer.listen(3000, () => {
  console.log("Server is running on port 3000");
})
// app.get('/', (req, res)=>{
//   res.send("Hello world");
// });
io.on('connection', (socket) => {
  console.log(`New connection ${socket.id}`)
  // Listening for chat event
  socket.on('chat', function(data){
      // console.log('chat event trigged at server');
      // console.log('need to notify all the clients about this event');
      io.sockets.emit('chat', data);
  });

  // Listening for typing event
  socket.on('typing', function(data){
      // console.log(`Server received ${data} is typing`);
      // console.log('need to inform all the clients about this');
      io.sockets.emit('typing', data);
      //socket.broadcast.emit('typing', data);
  });

});


