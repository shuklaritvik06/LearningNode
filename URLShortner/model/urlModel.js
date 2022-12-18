require('dotenv').config()
const mongoose = require('mongoose');
mongoose.connect(`mongodb+srv://ritvik:${process.env.PASSWORD}@cluster0.vmpmx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`).then(()=>console.log("Success!!")).catch((err)=>console.error(err));
const Schema = new mongoose.Schema({
    url: {
        type: String,
        required: true
    },
    shortUrl: {
        type: String,
        required: true
    },
    date:{
        type: String,
        required: true
    },
    clicks:{
        type:Number,
        required: true
    }
});
const urlModel = mongoose.model('urldoc', Schema);
module.exports = urlModel;