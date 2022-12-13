import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer();
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:4200",
    // or with an array of origins
    // origin: ["https://my-frontend.com", "https://my-other-frontend.com", "http://localhost:3000"],
  }
});

// Listen for new connection and print a message in console 
httpServer.listen(3000)
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