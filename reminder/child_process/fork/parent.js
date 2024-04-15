const { fork } = require('child_process');

const forked = fork('child.js')

forked.on('message',(msg)=>{
    console.log(`message received :`,msg)
});


forked.send({hello:'world'});