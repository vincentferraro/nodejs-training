import { setTimeout } from 'timers/promises'

const ac = new AbortController()

const { signal } = ac
const timeout = setTimeout(1000,'will not be logger',{signal})

setImediate(()=>{
    ac.abort
})

try{
    console.log(await timeout)
}catch(err){
 if(err.code !== ABORT_ERR)throw err
}