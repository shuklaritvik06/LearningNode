const readline = require("readline");
const net = require("net");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
var server = net.createServer();
server.on("connection", (socket) => {
  console.log(
    "New Client Joined",
    socket.remoteAddress + ":" + socket.remotePort
  );
  socket.on("data", (data) => {
    console.log(data.toString());
  });
  socket.once("close", () => {
    console.log("client connection closed.");
  });
  socket.on("error", (err) => {
    console.log("client connection got errored out.");
  });
  socket.write("Hello Client!");
  rl.on("line", (input) => {
    socket.write(`SERVER: ${input}`);
  });
});

server.listen(8000, () => {
  console.log("opened server on %j", server.address().port);
});
