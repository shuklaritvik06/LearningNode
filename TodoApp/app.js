const express = require('express');
const favicon = require('serve-favicon')
const todoController = require('./controllers/todoController');
const path = require("path");
const app = express();
const PORT = 5000;
app.set('view engine','ejs');
app.use(express.static(__dirname+"/public"));
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
todoController(app);
app.listen(PORT,()=>{
    console.log(`Server started at port ${PORT}`);
});
