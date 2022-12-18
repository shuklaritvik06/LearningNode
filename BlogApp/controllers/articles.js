const express = require('express');
const formidable = require('express-formidable');
const articleModel = require('../models/articleModel');
const methodOverride = require('method-override');
const marked = require('marked');
const router = express.Router();

router.use(formidable());
router.use(methodOverride('_method'));
router.get("/",(req,res)=>{
    articleModel.find().sort({ date: 'desc'}).then((result)=>{
        res.render('home',{ blogs: result});
    }).catch((err)=>console.error(err))
});
router.get("/edit/:id",(req,res)=>{
    articleModel.findById(`${req.params.id}`).then((result)=>{
        res.render('edit',{blog: result});}).catch((err)=>console.error(err));
});
router.put("/edit/:id",(req,res)=>{
    let article = new articleModel({
        _id: req.params.id,
        ...req.fields,
        date: `${(new Date()).toLocaleDateString()}`
    });
    articleModel.replaceOne({ _id: req.params.id},article).then(()=>res.redirect("/article"))
});
router.get("/read/:id",(req,res)=>{
    articleModel.findById(`${req.params.id}`).then((result)=>{
        result.body= marked.parse(result.body);
        res.render('readmore',{blog: result});}).catch((err)=>console.error(err));
});

router.get("/write",(req,res)=>{
    res.render('write');
});
router.post("/write",(req,res)=>{
    let article = new articleModel({
        ...req.fields,
        date: `${(new Date()).toLocaleDateString()}`
    });
    article.save().then(()=>res.redirect("/article")).catch((err)=>console.error(err));
});
router.delete("/:id",(req,res)=>{
    articleModel.findByIdAndDelete(`${req.params.id}`).then(()=>res.redirect("/article")).catch((err)=>console.error(err));
});
module.exports = router;