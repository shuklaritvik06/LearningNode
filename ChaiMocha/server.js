const express = require('express');
const {v4} = require('uuid');
const app = express();
const data = [
    {
       id: 1,
       name: "Ramesh",
       email: "ramesh@gmail.com",
       password: "hello134!??"
    },
    {
        id: 2,
        name: "Rakesh",
        email: "rake@gmail.com",
        password: "hello134!"
    }
]
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.get("/api/users",(req,res)=>{
    res.status(200).json(data);
})
app.get("/api/users/:id",(req,res)=>{
    res.status(200).json(data.find((user)=>user.id===parseInt(req.params.id)));
})
app.delete("/api/users/:id",(req,res)=>{
    data.splice(data.findIndex(user=>user.id===req.params.id),1);
    res.status(200).json(data);
})
app.post("/api/users/create",(req,res)=>{
    const user = {
        id:req.body.id,
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    }
    data.push(user);
    res.status(201).json(data);
})
app.put("/api/users/:id",(req,res)=>{
    const user = data.find(user=>user.id===parseInt(req.params.id));
    user.name = req.body.name;
    user.email = req.body.email;
    user.password = req.body.password;
    res.status(200).json(data);
})
module.exports = app.listen(8000,()=>{
    console.log("Listening");
})
