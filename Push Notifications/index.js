if(process.env.NODE_ENV !== "production"){
    require("dotenv").config();
}
const express = require('express');
const webPush = require('web-push');
const { PUBLIC_KEY, PRIVATE_KEY } = require('./config/config');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

const publicVapidKey = PUBLIC_KEY;
const privateVapidKey = PRIVATE_KEY;

webPush.setVapidDetails("mailto:ritvikshukla@gmail.com", publicVapidKey, privateVapidKey);
app.post("/subscribe", (req, res) => {
    const subscription = req.body;
    res.status(201).json({});
    const payload = JSON.stringify({ title: "Push Test" });
    webPush.sendNotification(subscription, payload).catch(err => console.error(err));
});
app.listen(5000, () => console.log("Server started on port 5000"));