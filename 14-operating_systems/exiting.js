'use strict'

const useExitcode = ()=>{
     setInterval(()=>{
        console.log('process alive')
    },1000)
    
    setTimeout(()=>{
        console.log('quit after this')
        process.exit(1)
        
    }, 5000)
}

// useExitcode()

// Insert exite code independantly

const useExistCodeIndependantly= ()=>{

    setInterval(()=>{
        console.log('keep process alive')
        process.exitCode = 1
    }, 300)

    setTimeout(()=>{
        console.log('Shut down process')
        process.exit()
    },1500)
}
useExistCodeIndependantly()

const useExistCodeWithEvenHandler = ()=>{
    setInterval(()=>{
        console.log('keep process alive')
        process.exitCode = 1
    }, 300)

    setTimeout(()=>{
        console.log('Shut down process')
        process.exit()
    },1500)

    process.on('exit',(code)=>{
        console.log('exiting with code', code)
        setTimeout(()=>{
            console.log('this will never happen')
        },1)
    })
}
useExistCodeWithEvenHandler()