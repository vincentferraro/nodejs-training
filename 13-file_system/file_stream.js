'use strict'
const {pipeline, Transform} = require('stream')
const { join } = require('path')
const { createReadStream, createWriteStream } = require('fs')

pipeline(
    createReadStream(__filename),
    createWriteStream(join(__dirname,'stream.txt')),(err)=>{
        if(err){
            console.error(err)
            return
        }
        console.log('finished writing')
    }
)

// With transform stream

const createTransformStream = ()=>{
    return new Transform({
        transform(chunk,encod,next){
            const uppercased = chunk.toString().toUpperCase()
            next(null, uppercased)
        }
    })
}
pipeline(
    createReadStream(__filename),
    createTransformStream(),
    createWriteStream(join(__dirname,'streamTransformed.txt')),(err)=>{
        if(err){
            console.error(err)
            return
        }
        console.log('finished writing')
    }
)
