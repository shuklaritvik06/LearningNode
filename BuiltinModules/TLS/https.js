const https = require("node:https");
const fs = require("node:fs");

const options = {
  key: fs.readFileSync("./server-key.pem"),
  cert: fs.readFileSync("./server-cert.pem"),
  hostname: "encrypted.google.com",
  port: 443,
  path: "/",
  method: "GET",
};

https
  .createServer(options, (req, res) => {
    res.writeHead(200);
    res.end("hello world\n");
  })
  .listen(8000);
https
  .get("https://encrypted.google.com/", (res) => {
    console.log("statusCode:", res.statusCode);
    console.log("headers:", res.headers);

    res.on("data", (d) => {
      process.stdout.write(d);
    });
  })
  .on("error", (e) => {
    console.error(e);
  });

const req = https.request(options, (res) => {
  console.log("statusCode:", res.statusCode);
  console.log("headers:", res.headers);

  res.on("data", (d) => {
    process.stdout.write(d);
  });
});

req.on("error", (e) => {
  console.error(e);
});
req.end();
