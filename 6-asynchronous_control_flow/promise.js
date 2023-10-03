// Creating promises

function myAsincOperation(){
    return new Promise((resolve,reject)=>{
        doSomethingAsynchronous((err,value)=>{
            if(err) reject(err)
            else resolve(value)
        })
    })
}

// const promise = myAsincOperation()
// promise.then((value)=>console.log('Hello')).catch((error)=> console.log('error', error))


// Creating promise with promisify

const { promisify } = require('promisify')
const { readFile } = require('fs').promises

// const readFileProm = promisify(readFile)

// const promise = readFileProm(__filename)

// promise.then((contents)=>{
//     console.log(contents.length)
// })

// promise.catch((err)=>{ console.error(err)})

readFile(__filename).then((contents)=>{
    console.log(contents)
}).catch((err)=> console.error(err))
