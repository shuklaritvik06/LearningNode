require('dotenv').config()
const mongoose = require('mongoose');
mongoose.connect(`mongodb+srv://ritvik:${process.env.PASSWORD}@cluster0.vmpmx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`).then(r => {});
const Schema  = new mongoose.Schema({
    name: String,
    orderPrice: String,
    ordered: String,
    date: String
});
const orderModel = mongoose.model('order',Schema);
module.exports = orderModel