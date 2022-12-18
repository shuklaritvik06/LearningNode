const express = require('express');
const formidable = require('express-formidable');
const router = express.Router();
router.use(formidable());
router.get("/",(req,res)=>{
    res.render('index');
})
router.post("/",(req,res)=>{
    res.render('chat',{name: req.fields.name});
});
module.exports = router;
