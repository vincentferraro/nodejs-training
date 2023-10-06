// Allocating buffer
var buf1 = Buffer.alloc(10)
console.log(buf1)

var buf2 = Buffer.from('hello world!!!')
console.log(buf2)

// String to Buffer
console.log('👀'.length)
console.log(Buffer.from('👀').length)
console.log(Buffer.from('👀'))

// Converting Buffer to String
console.log('BUFFER TO STRING')
var buf3 = Buffer.from('👀')
console.log(buf3)
console.log(buf3.toString())
console.log(buf3.toString('hex'))
console.log(buf3.toString('base64'))

// STRING_DECODER

console.log('///STRING DECODER')
const { StringDecoder }=require('string_decoder')
var buf4 = Buffer.from('f09f','hex')
var buf5 = Buffer.from('9180','hex')

const decoder = new StringDecoder()
console.log(decoder.write(buf4))
console.log(decoder.write(buf5))
