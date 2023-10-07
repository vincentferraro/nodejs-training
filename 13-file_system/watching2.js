'use strict'
const { join, resolve } = require('path')
const { watch, readdirSync, statSync } = require('fs')

const cwd = resolve('.')
const files = new Set(readdirSync('.'))

watch('.',(evt,filename)=>{
    try{
        const { cTimeMs, mTimeMs } = statSync(join(cwd,filename))
        if(files.has(filename) === false){
            evt = 'created'
            files.add(filename)
        }else{
            if(cTimeMs === mTimeMs){
                evt = 'content-updated'
            }else{
                evt = 'status-updated'
            }
        }
    }catch(err){
        if( err.code === 'ENOENT'){
            files.delete(filename)
            evt = 'deleted'
        }else{
            console.log(err)
        }

    }finally{
        console.log(evt, filename)
    }
})