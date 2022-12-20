const express = require("express");
const app = express();
const cors = require("cors");
const http = require("http");
require("./connection");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: "*",
  method: "*",
});

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

server.listen(8081, () => {
  console.log("server listening running...", 8081);
});
