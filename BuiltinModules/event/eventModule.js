// Event Emitter

const events = require('events');
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