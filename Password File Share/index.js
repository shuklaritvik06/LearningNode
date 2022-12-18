if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const express = require("express");
const Route = require("./routes/fileRoutes");
const app = express();

app.use(express.urlencoded({ extended: true }));

app.use("/", Route);
app.set("view engine", "ejs");

app.listen(8000, () => {
  console.log("Server started on port 3000");
});
