const express = require("express");
const https = require("https");
const path = require("path");
const fs = require("fs");

const app = express();

app.get("/", (req, res) => {
  res.json({ status: "Hello Bro!" });
});

const sslServer = https.createServer(
  {
    key: fs
      .readFileSync(path.join(__dirname, "cert", "key.pem"))
      .toString("utf-8"),
    cert: fs
      .readFileSync(path.join(__dirname, "cert", "cert.pem"))
      .toString("utf-8"),
  },
  app
);

sslServer.listen(3443, () => {
  console.log("Listening!");
});
