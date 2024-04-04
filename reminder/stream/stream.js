const fs = require('fs');

const readableStream = fs.createReadStream(__filename);

readableStream.on('data',(data)=>{
    console.log('chunk received')
console.log(data)
})

readableStream.on('end',()=>{
    console.log('Finishing reading')
})