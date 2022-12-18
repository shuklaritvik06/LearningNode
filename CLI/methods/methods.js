const orderModel = require('../models/order');
const order = (order)=>{
    const newOrder = new orderModel({
        ...order,
        date: new Date()
    });
    newOrder.save().then(()=>{
        console.info("Order Added");
        process.exit(0)
    });
}
const findOrder = (_name)=>{
    const search = new RegExp(_name,'i');
    orderModel.find({name: search}).then((result)=>{
        (result.length>0) ? console.info(result) : console.info("No match found");
        process.exit(0)
    });
}
const updateOrder = (order)=>{
    const search = new RegExp(order.name,'i');
    orderModel.updateOne({name: search},order).then(()=>{
        console.info(`Updated the record`);
        process.exit(0);
    });
}
const removeOrder = (_name)=>{
    const search = new RegExp(_name,'i');
    orderModel.deleteOne({name: search}).then(()=>{
        console.info(`Removed the record`);
        process.exit(0);
    });
}
const listOrder = ()=>{
    orderModel.find().then((result)=>{
        (result.length>0) ? console.info(result) : console.info("No record found");
        process.exit(0);
    })
}
module.exports = {
    order,
    findOrder,
    removeOrder,
    updateOrder,
    listOrder
}