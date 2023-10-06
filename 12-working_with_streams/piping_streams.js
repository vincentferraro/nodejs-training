'use strict'
const net = require('net')


net.createServer((socket)=>{
    const interval = setInterval(()=>{
        socket.write('beat')
    },1000)
    socket.on('data',(data)=>{ 
        socket.write(data.toString().toUpperCase())
    })
    socket.on('end',()=>{ clearInterval(interval)})
}).listen(3000)

const socket = net.connect(3000)

socket.pipe(process.stdout)

socket.write('hello')

setTimeout(()=>{
    socket.write('all done')
    setTimeout(()=>{
        socket.end()
    },250)
},3250)
