// Propagation permit to rethrow an error

const { isNumber, OddError } = require("./custom_errors");

function codify(err,code){
    err.code = code
    return err
}
function doTaskCB(amount,cb){
    if(typeof amount !== 'number'){
        cb(codify(new TypeError('Must be a number'),'MUST_BE_NUMBER'))
        return
    }
    else if(amount >= 10){
        cb(codify(new RangeError('Must be less than 10'), "MUST_BE_LESS"))
        return
    }
    else if(amount%2){
        cb(codify(new OddError('Must be event'),"MUST_BE_EVEN"))
        return
    }
    else{
        return amount
    }
}
function run(){
    doTaskCB(11,(err,result)=>{
        if(err){
            if(err instanceof TypeError){
                throw new Error('Type ERROR',err.code)
            }
            else if(err >=10){
                throw new Error('Range Error',err.code)
            }
            
        }else{
            return result
        }
    })
}
// WIP