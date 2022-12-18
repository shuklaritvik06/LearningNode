const express = require('express');
const Router = require('./controllers/articles');
const PORT = process.env.PORT || 3000;
const app = express();
app.set('view engine','ejs');
app.use('/article',Router);
app.get("/",(req,res)=>{
    res.render('index')
})
app.listen(PORT,()=>{
    console.log(`Server started at http://localhost:${PORT}`);
});