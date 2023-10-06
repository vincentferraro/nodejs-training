// Using fs module for this exercice

// const fs = require('fs')

// const readable = fs.createReadStream(__filename)
// // readable.on('data',(data)=>{console.log('got data', data)})
// // readable.on('end',()=>{console.log('finished reading')})


const { Readable } = require('stream')
const createReadStream = ()=>{
    const data = ['some','data','to','read']
    return new Readable({
        read(){
            if(data.length ===0)this.push(null)
            else this.push(data.shift())
        }
})}

const readable = createReadStream()
readable.on('data',(data)=>{ console.log('got data',data)})
readable.on('end',()=>{ console.log('finished reading')})

// Encoding with an other format

const createReadStreamWIthEncoding = ()=>{
    const data = ['some','data','to','read']
    return new Readable({
        encoding:'utf8',
        read(){
            if(data.length === 0) this.push(null)
            else this.push(data.shift())
        }
    })
}
const readable2 = createReadStreamWIthEncoding()
readable2.on('data',(data)=>{ console.log('got data',data)})
readable2.on('end',()=>{ console.log('finished reading')})

// Using readable in object mode in order to avoid to put data in a Buffer

const createReadableObjectTrue = ()=>{
    const data = ['some','data','to','read']
    return new Readable({
        objectMode: true,
        read(){
            if(data.length === 0) this.push(null)
            else this.push(data.shift())
        }
    })
}
const readable3 = createReadableObjectTrue()
readable3.on('data', (data)=>{ console.log('got data',data)})
readable3.on('end', ()=>{console.log('finished reading')})

// Condensend method

const readable4 = new Readable.from(['some','data','to','read'])
readable4.on('data',(data)=>{ console.log('got data', data)})
readable4.on('end', ()=>{console.log('finished reading')})