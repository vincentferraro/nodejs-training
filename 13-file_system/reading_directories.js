'use strict'

const { readdirSync, readdir } = require('fs')
const { readdir: readdirProm } = require('fs/promises') // add an Aliases for avoir confusion with line above
// Synchronous way
try{
    console.log('sync',readdirSync(__dirname))

}catch(err){
    console.error(err)
}
// Callback way
readdir(__dirname, (err,files)=>{
    if(err){
        console.error(err)
        return
    }
    console.log('callback',files)
})

// asynchronous way
async function run(){
    const files = await readdirProm(__dirname)
    console.log('promises',files)
}
run().catch(err=>{
    console.log(err)
})