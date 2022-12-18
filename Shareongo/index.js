if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
const express = require("express");
const ejs = require("ejs");
const router =  require("./routes/fileRoutes");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/", router);
app.listen(8000,function(){
    console.log("Server started on port 8000");
})