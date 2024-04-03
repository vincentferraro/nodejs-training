'use strict'
const { Transform } =require('stream')
console.log('initialized');

const createUpperCase = ()=>{
    return new Transform({
        transform(chunk, encoding, next){
            const uppercased = chunk.toString().toUpperCase();
            next(null, uppercased)
        }
    })
}

const upperCase = createUpperCase();
process.stdin.pipe(upperCase).pipe(process.stdout);
