// Serializing JSON to Buffer

const buf1 = Buffer.from('👀').toJSON()
console.log(buf1)
console.log(buf1.type)
const json = JSON.stringify(buf1)
console.log(json)
const parsed = JSON.parse(json)
console.log(parsed)
console.log(parsed.data)