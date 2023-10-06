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

// Second version of server


const socket = net.connect(3000)

socket.on('data',(data)=>{ console.log('got data:', data.toString())})

socket.write('hello')

setTimeout(()=>{
    socket.write('all done')
    setTimeout(()=>{
        socket.end()
    },250)
},3250)


const { createGzip } = require('node:zlib');

const transform = createGzip()
transform.on('data',(data)=>{
    console.log('got gzip data',data.toString('base64'))
})
transform.write('first')
setTimeout(()=>{
    transform.end('second')
},500)