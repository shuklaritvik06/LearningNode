const express = require('express');
const model = require('../models/userModel');
const bcrypt = require('bcrypt');
const router = express.Router();
const formidable = require('express-formidable');
router.use(formidable());
router.get("/register", (req, res) => {
    res.render('register');
});

// Register a user

router.post("/register", async (req, res) => {
    const pass = await bcrypt.hash(req.fields.pass,10);
    const user = new model({
        username: req.fields.user,
        email: req.fields.mail,
        password: pass
    })
    user.save().then(()=>res.redirect("/"));
});

// Login a user

router.post("/login", (req, res) => {
    model.find({username: req.fields.name}).then( async (result)=>{
        if(result.length===0){
          res.redirect("/");
        }
      try{
        if(await bcrypt.compare(result[0].password, user.passwordHash)){
          res.render("secret");
        }
        }catch{
        res.render("Server Error");
      }
    });
});

module.exports = router;
