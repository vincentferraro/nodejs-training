const buf1 = Buffer.alloc(10)
console.log(buf1)
buf1[1]= 200;
console.log(buf1)

const buf2 = buf1.slice(0,4)
console.log(buf2)
console.log(buf1)
const buf3 = Buffer.from('Hello World');
console.log('Buf4,',buf3, buf3.length)

const buf4 = Buffer.from('A','utf8');
const buf5 = Buffer.from('A','utf16le');
console.log(buf4)
console.log(buf5)
console.log('//////')
console.log(buf3.toString());