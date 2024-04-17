function isInteger(num){
    
    if(typeof num === 'string' |  typeof num === 'boolean') throw new TypeError('not a integer');
    else if(typeof num === 'undefined') throw new ReferenceError('num is undefined')
    else {
    return num
}
}

try{
    const res = isInteger(undefined);

    console.log(res)
}catch(err){
    if(err instanceof TypeError) console.error('num should be a integer liek: 1,2,3...')
    else if(err instanceof ReferenceError) console.error('Undefined is not an integer')
}