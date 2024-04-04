const { Readable} = require('stream')

const createReadStream=()=>{
    const data = ['data','to','you'];
    return new Readable({
        objectMode:true,
        read(){
            if(data.length===0) this.push(null);
            else{
                this.push(data.shift())
            }
        }
    })
}

const readable = createReadStream()

readable.on('data',(data)=>{
    console.log('got chunk', data)
})

readable.on('end',()=>{
    console.log('end of the stream');
})