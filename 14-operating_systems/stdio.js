'use strict'
process.stderr.write(process.stdin.isTTY? 'terminal\n':'piped to\n')
const { Transform } = require('stream')
const createUpperCaseStream = ()=>{
    return new Transform({
        transform(chunk,enc, next){
            const uppercased = chunk.toString().toUpperCase()
            next(null, uppercased)
        }
    })
}
const uppercase = createUpperCaseStream()
process.stdin.pipe(uppercase).pipe(process.stdout)