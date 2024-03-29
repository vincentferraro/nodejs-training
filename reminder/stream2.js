const { Readable } = require('stream')
const fs = require('fs')
const readableStream = ()=>{
    const data = ['some','data','to','read']

    return new Readable({
        read(){
            if(data.length === 0) this.push(null);
            else{
                console.log(data)
                this.push(data.shift())
            }
        }
    })
}

const readable = readableStream();

readable.on('data',(data)=> console.log('got data', data.toString()));
readable.on('end',()=>console.log('Finished reading'));


const writable = fs.createWriteStream('out.txt')

writable.on('finish',()=>console.log('Finished writing'));

writable.write('/A\n');
writable.write('/B\n');
writable.write('/C\n');
writable.end(()=>console.log('nothing more to write'));

const file = fs.readFileSync('out.txt')

console.log(file.toString());