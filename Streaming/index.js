const express = require("express");
const path = require("path");
const app = express();
app.use(express.static(path.join(__dirname,"/public")));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/stream", (req, res) => {
  const path = "stream.mp4";
  const stat = fs.statSync(path);
  const fileSize = stat.size;
  const range = req.headers.range;
  const parts = range.replace(/bytes=/, "").split("-");
  const start = parseInt(parts[0], 10);
  const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
  const chunksize = end - start + 1;
  console.log(chunksize);
  const file = fs.createReadStream(path, { start, end });
  const head = {
    "Content-Range": `bytes ${start}-${end}/${fileSize}`,
    "Accept-Ranges": "bytes",
    "Content-Length": chunksize,
    "Content-Type": "video/mp4",
  };
  res.writeHead(206, head);
  file.pipe(res);
});

app.listen(5000,()=>{
    console.log("Listening on 5000");
})
