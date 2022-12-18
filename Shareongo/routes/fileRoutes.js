const express = require("express");
const router = express.Router();
const  {getHomePage, uploadFile, sendEmail,getFile} = require("../controllers/shareController");

router.get("/", getHomePage);

router.post("/upload",uploadFile);

router.post("/email",sendEmail);

router.get("/files/:fileName", getFile);

module.exports = router;
