const express = require('express');
const router = require('./routers/router');
const app = express();
const PORT = process.env.PORT || 5000;
app.set('view engine','ejs');
app.use("/",router);
app.use(express.static(__dirname+"/public"))
app.listen(PORT,()=>{
    console.log(`Connected`)
});