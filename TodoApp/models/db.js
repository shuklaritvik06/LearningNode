require('dotenv').config()
const mongoose = require('mongoose');
const db = mongoose.connect(`mongodb+srv://ritvik:${process.env.PASSWORD}@cluster0.vmpmx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`).then(()=>console.log("Success"));
const schema = mongoose.Schema;
const myTodoSchema = new schema({
    title:{
        type: String,
        required: true
    },
    body:{
        type: String,
        required: true
    }
});
const model = mongoose.model('todo',myTodoSchema);
module.exports = model;