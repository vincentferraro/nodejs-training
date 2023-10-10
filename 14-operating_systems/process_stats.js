'use strict'
console.log('Process uptime', process.uptime())

const outputStats =()=>{
    const uptime = process.uptime()
    const { user, system } = process.cpuUsage()
    console.log(uptime, user, system, (user + system)/1000000)
}

outputStats()

setTimeout(()=>{
    outputStats()
    const now = Date.now()
    while(Date.now() - now < 5000){}
    outputStats()
}, 500)