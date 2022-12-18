const express = require('express');
const Router = require('./controllers/urlController');
const app = express();
const PORT = process.env.PORT || 3000;
app.set('view engine','ejs');
app.use('/',Router);
app.listen(PORT,()=>{
    console.log(`Server started ar port ${PORT}`);
})