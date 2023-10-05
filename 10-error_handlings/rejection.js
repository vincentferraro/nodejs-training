// Rejection
// Exception come from synchronous, Rejection from asynchronise (Promise)

const { OddError } = require("./custom_errors")

function doTaskPromise(number){
    return new Promise((resolve,reject)=>{
        if(typeof number !== 'number'){
            reject(new TypeError('Must be a number'))
            return
        }
        else if(number %2){
            reject(new OddError('Must be even'))
            return
        }
        else if( number >=10){
            reject(new RangeError('Must be less than 10'))
        }
        else{
            resolve('Resolved '+ number)
        }
    })
}

// First version
doTaskPromise(2).then((res)=>console.log(res)).catch(err => console.error(err))

// Rejection in asynchronous task

async function otherFetchPromise(amount){
    if(!amount){ return 'ok'}
    else throw new Error('Error from Fetch')
}

async function isNumberAsync(number){
    if(typeof number !== 'number') throw new TypeError('not a number')
    else if(number >=10) throw new RangeError('Must be less than 10')
    else if(number%2) throw new OddError('Number')
    else {
        const result = await otherFetchPromise(number)
        return result
    }
}

try{
    const res = isNumberAsync(2)
}catch(err){
    console.error(err)
}