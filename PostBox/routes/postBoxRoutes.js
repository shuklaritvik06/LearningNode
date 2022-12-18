const express = require("express");
const { getHomePage } = require("../controllers/postBoxController");
const router = express.Router();

router.get("/", getHomePage);

module.exports = router;
