// throw and Error()
function doAmount(number){
    if(typeof number !== 'number') {
        const err = new Error('Not a number')
        err.code= 'MUST_BE_NUMBER'
    throw err}
    else if(number >=10) throw new RangeError('The number must be less than 10')
    else console.log('The number :'+ number)
}

process.stdin.resume()
// doAmount('hello')

doAmount('hello')

// SyntaxError inherit from Error class
const err = new SyntaxError()
console.log(err instanceof SyntaxError)
console.log(err instanceof Error)
console.log(err instanceof EvalError)

