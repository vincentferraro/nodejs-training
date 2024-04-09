const { Writable, pipeline}=require('stream');
const fs =  require('fs');

const readable = fs.createReadStream(__filename);
const writable = fs.createWriteStream('streaming.txt')
readable.on('data',(data)=>{
    console.log('got data',data.toString())
})
readable.on('end',()=>{console.log('reading finished')});

writable.write('Hello\n')
writable.write('Hello\n')
writable.write('Hello\n')


