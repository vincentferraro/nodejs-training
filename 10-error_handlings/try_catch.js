// Error handle with TRY / CATCH
const { OddError, isNumber} = require('./custom_errors')


try{
    const result = isNumber(9)
    console.log('result', result)
}catch(err){
    if(err instanceof TypeError){
        console.error('wrong type', err.code)}
    else if(err instanceof RangeError){
        console.error('Need less than 10',err.code)
    }
    else if(err instanceof OddError){
        console.error('Chose even number',err.code)
    }
}
