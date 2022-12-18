require("dotenv").config();

const express = require("express");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const router = require("./routes/weatherRoutes");
const port = process.env.PORT || 8000;
const app = express();

const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // Milliseconds
	max: 6,   // Max requests in the specified time window
	standardHeaders: true, // Set the X-RateLimit-Limit and X-RateLimit-Remaining headers
	legacyHeaders: false
})

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api",limiter);
app.set("trust proxy", 1);
app.set("view engine", "ejs");
app.use("/", router);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
