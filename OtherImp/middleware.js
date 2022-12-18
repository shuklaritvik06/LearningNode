// Middleware is the code which runs on the server before getting a request and sending the response

const express = require('express');
const app = express();

app.use((req,res)=>{
  console.log("I am in first Middleware");
  console.log(`Hostname: ${req.hostname}`);
  console.log(`Path: ${req.path}`);
  console.log(`Method: ${req.method}`);
  next(); 
});

app.use((req,res)=>{
  console.log("I am in Second Middleware");
  console.log(`Hostname: ${req.hostname}`);
  console.log(`Path: ${req.path}`);
  console.log(`Method: ${req.method}`);
  next(); 
});

app.get("/",()=>{
  
});
