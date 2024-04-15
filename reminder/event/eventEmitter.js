const { EventEmitter } = require('events');

const event = new EventEmitter();

event.on('data',(data)=>{
    console.log('data received', data)
})

event. on('message', (msg)=>{
    console.log('Message received', msg)
})
event.emit('data','Hello World')
event.emit('message',`this is a message from event Emitter`);