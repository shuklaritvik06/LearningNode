const express = require("express");
const router = express.Router();
const {
  getTestPage,
  getRoomPage
} = require("../controllers/appController");

router.get("/", getTestPage);

router.get("/:id", getRoomPage);

module.exports = router;
