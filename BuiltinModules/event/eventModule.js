// Event Emitter

const events = require('events');
class Order extends EventEmitter{
 orderNo = 0;
 constructor(){super();} 
 order(){
   this.orderNo+=1;
   this.emit("order",size,price);
 }
}
const order = new Order();
order.on("order",(size,price)=>{})
const myEventEmitter = new events.EventEmitter();
myEventEmitter.on('myevent',(argument)=>{
  console.log(argument);
});
myEventEmitter.emit('myevent','HELLO');
myEventEmitter.eventNames().forEach(eventName=>{
    console.log(eventName);
});
console.log(myEventEmitter.listenerCount("myevent"))
myEventEmitter.listeners("myevent").forEach(listener=>{
    console.log(listener.toString());
});
myEventEmitter.once("myevent",()=>{
    console.log("myevent once listened");
})
myEventEmitter.prependListener("myevent",()=>{
    console.log("Listeners");
}).prependListener("myevent",()=>{
    console.log("Listeners");
}).prependListener("myevent",()=>{
    console.log("Listeners");
});
