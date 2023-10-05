// An other version of Try /catch
// Rewrite doTask with codify

function codify(err, code){
    err.code = code 
    return err
}

function isNumber2(number){
    if(typeof number !== 'number') throw codify(new TypeError('not a number'),'MUST_BE_NUMBER')
    else if(number >=10) throw codify(new RangeError('Must be less than 10'),'MUST_BE_LESS')
    else if(number%2) throw codify(new OddError('Number'),'MUST_BE_EVEN')
    else console.log('Is the number :' + number)
}

try{
    const result = isNumber2(11)
    console.log(result)
}catch(err){
    if(err.code === 'MUST_BE_NUMBER'){
        console.error('wrong type', err.code)}
    else if(err.code === 'MUST_BE_LESS'){
        console.error('Need less than 10',err.code)
    }
    else if(err.code === 'MUST_BE_EVEN'){
        console.error('Chose even number',err.code)
    }
}