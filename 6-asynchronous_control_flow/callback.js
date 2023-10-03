// Call back
const { readFile } = require('fs')
const [bigFile, mediumFile, smallFile] = Array.from(Array(3)).fill(__filename)
const print =(err,contents)=>{if(err){
    console.error(err)
    return
}else{
    console.log(contents.toString())
}}

//Parralel execution should print, smallFile first then medium file then bigFile
readFile(bigFile,print)
readFile(mediumFile, print)
readFile(smallFile, print)

// Chained execution 
console.log('///// Chained execution')
readFile(bigFile,(err,contents)=>{
    print(err, contents)
    readFile(mediumFile,(err, contents)=>{
        print(err, contents)
        readFile(smallFile,print)
    })
})

// Push all contents in an Array and concatened together

const data = []

readFile(bigFile,(err,contents)=>{
    if(err) print(err)
    else data.push(contents)
    readFile(mediumFile,(err,contents)=>{
        if(err) print(err)
        else data.push(contents)
        readFile(smallFile,(err,contents)=>{
            if(err) print(err)
            else data.push(contents)
            print(null,Buffer.concat(data))  // Concate here
        })
    })
})