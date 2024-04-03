'use strict'

// setInterval(()=>{
//     console.log('process alive')
// },1000)

// setTimeout(()=>{
//     console.log('ending process')
//     process.exit()
// },5000)


const useExitHandler = ()=>{
    setInterval(()=>{
        console.log('process alive')
        process.exitCode = 1;
    },1000)
    
    setTimeout(()=>{
        console.log('ending process')
        process.exit()
    },5000)

    process.on('exit',(code)=>{
        console.log("exiting with code", code)
        setTimeout(()=>{
            console.log('this will never happens');
        },1)
    })
    
}




console.log(process.cwd())
console.log(process.platfom)
console.log(process.pid)

const os = require('os')

console.log(os.homedir())
console.log(os.hostname())
console.log(os.tmpdir())

console.log(os.uptime())
console.log(os.freemem())
console.log(os.totalmem())
