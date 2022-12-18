const express = require("express");
const routes = require("./routes/appRoutes");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(5000);
const { PeerServer } = require('peer');

const peerServer = PeerServer({ port: 9000, path: '/myapp' });

const cors = require("cors");
app.use(express.static("public"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use("/", routes);

io.on("connection", (socket) => {
  socket.on("join-room", (roomId, userId) => {
    socket.join(roomId);
    socket.to(roomId).broadcast.emit("user-connected", userId);
    socket.on("disconnect", () => {
      socket.to(roomId).broadcast.emit("user-disconnected", userId);
    });
  });
});

app.listen(8000)
