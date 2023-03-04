const http = require("http");
const statement = {
  responseBody: "",
  requestBody: ""
};
const server = http.createServer((req, res) => {
  let data = "";
  req.on("data", (chunk) => {
    data += chunk;
  });
  req.on("end", () => {
    statement.requestBody = data;
  });
  const response = "Hi User!";
  res.setHeader("Content-Type", "text/plain");
  res.setHeader("Content-Length", response.length);
  res.write(response);
  res.end();
});
function startListening() {
  server.listen(5000, () => requestServer());
}
function requestServer() {
  const options = {
    port: 5000,
    method: "POST",
    path: "/"
  };
  const req = http.request(options, (res) => {
    let data = "";
    res.on("data", (chunk) => {
      data += chunk;
    });
    res.on("end", () => {
      statement.responseBody = data;
      finalize();
    });
  });
  const content = "Ritvik Shukla";
  req.setHeader("Content-Type", "text/plain");
  req.setHeader("Content-Length", content.length);
  req.write(content);
  req.end();
}
function finalize() {
  server.close();

  console.log("Request body");
  console.log(statement.requestBody);

  console.log("Response body");
  console.log(statement.responseBody);
}

startListening();

