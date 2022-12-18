const dgram = require("node:dgram");
const server = dgram.createSocket("udp4");
server
  .on("error", (err) => {
    console.log(`server error:\n${err.stack}`);
    server.close();
  })
  .on("message", (msg, rinfo) => {
    console.log(`server got: ${msg} from ${rinfo.address}:${rinfo.port}`);
  })
  .on("listening", () => {
    const address = server.address();
    console.log(`server listening ${address.address}:${address.port}`);
  })
  .bind(5000);
