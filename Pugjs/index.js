const express = require('express');
const path = require('path');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get("/",(req,res)=>{
    res.render("index",{
        title:"Pugjs",
    });
})

app.listen(9000,()=>{
    console.log("Server is running on port 9000");
})