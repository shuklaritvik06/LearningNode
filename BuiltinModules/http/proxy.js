"use strict";

const http = require("http");
const net = require("net");

const HTTP_PORT = 5000;
const PROXY_PORT = 5001;

const statement = {
  responseBody: "",
  requestBody: ""
};

const proxy = net.createServer((localsocket) => {
  const remotesocket = net.createConnection({
    port: HTTP_PORT
  });
  localsocket.on("data", (chunk) => {
    remotesocket.write(chunk);
  });

  remotesocket.on("data", (chunk) => {
    localsocket.write(chunk);
  });

  localsocket.on("close", () => {
    remotesocket.end();
  });

  remotesocket.on("close", () => {
    localsocket.end();
  });
});

const server = http.createServer({ port: HTTP_PORT }, (req, res) => {
  let data = "";
  req.on("data", (chunk) => (data += chunk));
  req.on("end", () => {
    statement.requestBody = data;
    const content = "Hey Bro!";
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.setHeader("Content-Length", content.length);
    res.write(content);
    res.end();
  });
});
function startServer() {
  server.listen(HTTP_PORT, () => {
    console.log(`TCP Server listening on ${HTTP_PORT}`);
    startProxy();
  });
}

function startProxy() {
  proxy.listen(PROXY_PORT, () => {
    console.log(`TCP proxy listening on ${PROXY_PORT}`);
    httpRequest();
  });
}

function httpRequest() {
  const req = http.request(
    {
      port: PROXY_PORT,
      path: "/",
      method: "POST"
    },
    (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => {
        statement.responseBody = data;
        finalize();
      });
    }
  );
  const content = "Hi I am request!";
  req.setHeader("Content-Type", "text/plain");
  req.setHeader("Content-Length", content.length);
  req.statusCode = 200;
  req.write(content);
  req.end();
}

function finalize() {
  proxy.close();
  server.close();
  console.log(statement.requestBody);
  console.log(statement.responseBody);
}

startServer();

