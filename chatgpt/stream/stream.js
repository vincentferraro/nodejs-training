'use strict';
const fs = require('fs');
const { Transform } = require('stream');
const readable = fs.createReadStream('input.txt');


const transform = function(){
    return new Transform({
        transform(chunk,enc, cb){
            if(chunk){
                
                console.log(chunk.length)
                console.log(chunk.kMaxLength)
                const uppercase = chunk.toString().toUpperCase();
                cb(null,uppercase)
            }
        }
    })
}

readable.pipe(transform()).pipe(fs.createWriteStream('output.txt'))