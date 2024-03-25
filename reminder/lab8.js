// const print = (err, contents) => { 
//     if (err) console.error(err)
//     else console.log(contents )
//   }
  
//   const opA = (cb) => {
//     setTimeout(() => {
//       cb(null, 'A')
//     }, 500)
//   }
  
//   const opB = (cb) => {
//     setTimeout(() => {
//       cb(null, 'B')
//     }, 250)
//   }
  
//   const opC = (cb) => {
//     setTimeout(() => {
//       cb(null, 'C')
//     }, 125)
//   }
  
//   opC((err,contents)=>{
//     if(contents){
//       console.log(contents)
//     }
//   })
//   opB((err,contents)=>{
//     if(contents){
//       console.log(contents)
//     }
//   })
//   opA((err, contents)=>{
//     if(contents){
//       console.log(contents)
//     }
//   })


// LAB 8.1
'use strict'
const { promisify } = require('util')

const print = (err, contents) => { 
  if (err) console.error(err)
  else console.log(contents) 
}

const opA = (cb) => {
  setTimeout(() => {
    cb(null, 'A')
  }, 500)
}

const opB = (cb) => {
  setTimeout(() => {
    cb(null, 'B')
  }, 250)
}

const opC = (cb) => {
  setTimeout(() => {
    cb(null, 'C')
  }, 125)
}

const promOpA =promisify(opA)
const promOpB =promisify(opB)
const promOpC =promisify(opC)

// const promOpB = promisify(opB);


async function callPromOpA(){
  const res = await promOpA()
  console.log(res)
}
async function callPromOpB(){
  const res = await promOpB()
  console.log(res)
}
async function callPromOpC(){
  const res = await promOpC()
  console.log(res)
}

async function launchingFunc(){
  await callPromOpA()
  await callPromOpB()
  await callPromOpC()
}

launchingFunc()