// Call back
// const { readFile } = require('fs')
// const [bigFile, mediumFile, smallFile] = Array.from(Array(3)).fill(__filename)
// const print =(err,contents)=>{if(err){
//     console.error(err)
//     return
// }else{
//     console.log(contents.toString())
// }}

// //Parralel execution should print, smallFile first then medium file then bigFile
// readFile(bigFile,print)
// readFile(mediumFile, print)
// readFile(smallFile, print)

// // Chained execution 
// console.log('///// Chained execution')
// readFile(bigFile,(err,contents)=>{
//     print(err, contents)
//     readFile(mediumFile,(err, contents)=>{
//         print(err, contents)
//         readFile(smallFile,print)
//     })
// })

// // Push all contents in an Array and concatened together

// const data = []

// readFile(bigFile,(err,contents)=>{
//     if(err) print(err)
//     else data.push(contents)
//     readFile(mediumFile,(err,contents)=>{
//         if(err) print(err)
//         else data.push(contents)
//         readFile(smallFile,(err,contents)=>{
//             if(err) print(err)
//             else data.push(contents)
//             print(null,Buffer.concat(data))  // Concate here
//         })
//     })
// })

// // With and amount of asynchronous function
// const files = Array.from(Array(3)).fill(__filename)
// let index = 0
// let count = files.length

// const read = (file)=>{
//     readFile(files[index],(err,contents)=>{
//         index += 1
//         if(err) print(err)
//         else data.push(contents)
//         if(index <count) read(files[index])
//         else print(null, Buffer.concat(data))
//     })
// }

// read(files[index])

// // With fastseries module
// const series = require('fastseries')

// const readers = files.map((file)=>{
//     return(_,cb)=>{
//         readFile(file, (err, contents)=>{
//             if(err) cb(err)
//             else cb(null, contents)
//         })
//     }
// })

// series(null, readers, null, print)


function displayMoney(money){
    return money
}

function getMoney(money, callback){
    if(typeof money !== 'number' ) callback(null, Error('Is not money'))
    else callback(money)
}

const money = getMoney(1200,displayMoney)
console.log(money)