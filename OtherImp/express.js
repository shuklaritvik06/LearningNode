const express = require('express');
const app = express();
const PORT = 3000;
app.get("/",(req,res)=>{
   res.send("Home");
});
app.get("/about",(req,res)=>{
   res.send("About");
});
app.get("/contact",(req,res)=>{
   res.send("Contact");  
});
app.get("/work",(req,res)=>{
   res.send("Work"); 
});
app.use((req,res)=>{
  res.send('OOPS! Not found');
});
app.listen(PORT,()=>{
  console.log(`Server Started at http://localhost:${PORT}`)
});
