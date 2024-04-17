import express from "express";
import http from "http";
import { Server } from "socket.io";

const app = express();
import cors from "cors";
app.use(cors());
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*", methods: ["GET", "POST"] },
});

io.on("connection", (socket) => {
  console.log(socket.id);
  socket.on("send_message", (data) => {
    console.log(data);
    socket.broadcast.emit('receive_message',data)
  });
});

server.listen(3001, () => {
  console.log("Server running on port 3000");
});
