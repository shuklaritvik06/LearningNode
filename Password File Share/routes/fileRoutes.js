const express = require('express');
const multer = require("multer");
const { getHome,getDownloadPage,downloadFile,uploadFile } = require("../controllers/fileController");


const upload = multer({ dest: __dirname + "/uploads" });

const Route = express.Router();
Route.get("/",getHome);

Route.post("/upload", upload.single("file"), uploadFile);

Route.get("/upload/:id", getDownloadPage);

Route.post("/upload/:id",downloadFile);
module.exports = Route;