const cluster = require("cluster");
const os = require("os");
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  console.log("Hello");
  res.json({
    name: "Hi!",
  });
});

app.get("/exit", (req, res) => {
  console.log("Exiting server gracefully...");
  res.json({ message: "Exiting server gracefully..." });
  setTimeout(() => {
    process.exit(0);
  }, 1000);
});

const numCPUs = os.cpus().length;

if (cluster.isPrimary) {
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    console.log(
      `Worker ${worker.process.pid} died (code: ${code}, signal: ${signal}). Restarting...`
    );

    cluster.fork();
  });
} else {
  app.listen(5000, () => {
    console.log(`Worker ${process.pid} listening on port 5000...`);
  });
}
