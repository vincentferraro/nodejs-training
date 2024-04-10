'use strict'
const { pipeline } = require('stream');
const { createReadStream, createWriteStream}= require('fs');
const { join } = require('path')


pipeline(
    createReadStream(__filename),
    createWriteStream(join(__dirname,'output.txt')),(err)=>{
        if(err){
            console.error(err);
            return
        }
        console.log('finished writing')
    }
);

