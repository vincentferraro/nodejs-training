// With FS module

const fs = require('fs')
const writable = fs.createWriteStream('./out')
writable.on('finish',()=>{ console.log('finished writing')})
writable.write('A\n')
writable.write('B\n')
writable.write('C\n')
writable.end('nothing to write')

// Using writable from stream module

const { Writable } = require('stream')

const createWriteStream = (data)=>{
    return new Writable({
        decodeStrings: false,
        write(chunk,encod,next){
             data.push(chunk)
             next()
        }
    })
}

const data = []
const writable2 = createWriteStream(data)
writable2.on('finish',()=>{ console.log('finished writing', data)})
writable2.write('A\n')
writable2.write('B\n')
writable2.write('C\n')
writable2.end('Nothing more to write')

// TO support string or an other value, set up the objectMode on true

const createWriteStreamObjectMode = (data)=>{
    return new Writable({
        objectMode: true,
        write(chunk, encod, next){
            data.push(chunk)
            next()
        }
    })
}
const data2 = []
const writable3 = createWriteStreamObjectMode(data2)
// console.log('ici')
writable3.on('finish',()=>{console.log('Finished writing', data2)})
writable3.write('A\n')
writable3.write(1)
writable3.end('Nothing to write')