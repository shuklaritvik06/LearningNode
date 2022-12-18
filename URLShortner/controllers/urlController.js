const express = require('express');
const formidable = require('express-formidable');
const urlModel = require('../model/urlModel');
const {nanoid} = require("nanoid");
const router = express.Router();
router.use(formidable());
router.get("/",(req,res)=>{
    urlModel.find().then((result)=>{
        res.render('index',{ short: result,base: { url:req.hostname}});
    }).catch((err)=>console.error(err));
});
router.post("/",(req,res)=>{
    const urlValue = new urlModel({
        url: req.fields.url,
        shortUrl: nanoid().slice(0,4),
        date:`${(new Date()).toLocaleDateString()}`,
        clicks: 0
    });
    urlValue.save().then(()=>res.redirect("/")).catch((err)=>console.error(err));
});
router.get("/url/:id",(req,res)=>{
    urlModel.findOne({ shortUrl: req.params.id}).then((result)=> {
        result.clicks++;
        result.save();
        res.redirect(`${result.url}`)
    }).catch((err)=>res.render('404'));
});
module.exports = router;