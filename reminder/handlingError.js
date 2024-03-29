// function  throwError(n){
//      let err = new Error();
//     if(n <10) err.code ='LESS_THAN_10'
//     else if(n==10) err.code = 'EQUAL_TO_10'
//     else err.code = "OTHER_ERROR"
//     throw err
// }

// try{
//     throwError(10);
// }catch(err){
//     if(err.code == 'LESS THAN 10')console.error('number less than 10')
//     if(err.code == 'EQUAL_TO_10')console.error('Equal to 10')
//     else console.error('OTHER ERROR ELSE BLOCK')
// }

function doError(n){
    return new Promise((resolve, reject)=>{
        if(n>0) resolve(n)
        else if(n == 0) reject(new RangeError('should be more than 0'))
        else if(n < 0) reject(new RangeError('should be positibe'))
    })
}

try{
    doError(5);
}catch(err){
    console.log(err)
}