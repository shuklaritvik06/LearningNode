if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const express = require("express");
const cors = require("cors");
const router = require("./routes/postBoxRoutes");
const bodyParser = require("body-parser");

const app = express();
app.use(express.static("public"));
app.use(cors());
app.set("view engine", "ejs");
app.use("/",router);
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})