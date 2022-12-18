const xmpp = require("simple-xmpp");
const express = require("express");
const app = express();
app.set("view engine","ejs");
app.get("/", function(req, res){
  res.render("home");
});
app.listen(5002,()=>{
  console.log("Server started");
});