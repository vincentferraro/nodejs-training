'use strict'
const { join } = require('path')
const { readFile, writeFile} = require('fs')
readFile(__filename,{encoding:'utf8'},(err,contents)=>{
    if(err) {
        console.error(err)
        return
    }
    console.log(contents)
})

// writeFileSync(join(__dirname,'out2.txt'),content.toUpperCase(),{
//     flag: 'a'
// })

// Version Asynchronous



readFile(__filename,{encoding:'utf8'},(err,contents)=>{
    if(err) {
        console.error(err)
        return
    }
    console.log(contents)
    writeFile(join(__dirname,'out.txt'),contents.toUpperCase(),(err)=>{
        if(err){
            console.error(err)
        }
    })
})