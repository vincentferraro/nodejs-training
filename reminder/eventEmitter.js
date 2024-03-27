const EventEmitter = require("events")

class MyEmitter extends EventEmitter{}
const myEmitter = new MyEmitter();
myEmitter.on('events',()=>{
    console.log("event emitted")
})

myEmitter.emit('events')


myEmitter.on('adding',(a,b)=>{
    console.log(a+b);
})

myEmitter.emit('adding',4,5)