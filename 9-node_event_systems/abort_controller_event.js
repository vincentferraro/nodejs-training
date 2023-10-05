const { once, EventEmitter} = require('events')
const { setTimeout } = require('timers-promises')
const uneventful = new EventEmitter()
const ac = new AbortController()
const { signal } = ac


async function run(){
    try {
        console.log('start')
        await once(uneventful, 'ping', { signal })
        console.log('pinged!')
      } catch (err) {
        // ignore abort errors:
        if (err.code !== 'ABORT_ERR') throw err
        console.log('canceled')
      }
    
}
setTimeout(500).then(()=>{ ac.abort()})

run()