const formidable = require('express-formidable');
const model = require('../models/db');
module.exports = function (app){
  app.use(formidable());
  //  Request Handlers
  app.get('/',(req,res)=>{
    model.find().then((result)=>{
      res.render('index',{todo:result});
    }).catch((err)=>console.log(err));
  });
  app.post('/',(req,res)=>{
    let task = new model(req.fields);
    task.save().then(()=>console.log("Success!"));
    res.redirect("/");
  });
  app.post("/delete",(req,res)=>{
      model.deleteOne({title: req.fields.title},(err)=>{
        if(err){
          console.log(err);
        }
        res.redirect("/");
      })
  });
};