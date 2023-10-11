'use strict'

const { spawnSync , spawn} =require('child_process')

const result = spawnSync(
process.execPath,
[`-e`,`console.log('subprocess stdio output')`]
)
console.log(result)
console.log(result.stdout.toString())



const result2 = spawnSync(process.execPath,[`-e`,`process.exit(1)`])
console.log(result2)

const sp = spawn(process.execPath, [`-e`,`console.log('process stdio output')`])

// console.log('pip is', sp.pid)
// sp.stdout.pipe(process.stdout)
// sp.on('close',(status)=>{
//     console.log('exit status was', status)
// })


// SPawn invocation 
console.log('Spawn invocation/////')
const sp2 = spawn(
    process.execPath,
    [`-e`,`process.exit(1)`]
)

console.log(sp2)