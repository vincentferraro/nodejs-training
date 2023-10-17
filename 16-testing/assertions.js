const assert = require('assert')
const  { add }= require('./addFunction.js')

assert.equal(add(2,2),4) // wil pass
// assert.strictEqual(add(2,2),'4') // Will throw an Error

const result = add(3,2)
assert.equal(result, 5)
assert.equal(typeof result, 'number')

// Assertion strictEqual

// assert.strictEqual(add(2,2),'4')// will throw
// assert.strict.equal(add(2,2),'4')


const obj1 ={ id:1, name:{first:'David',second:'Clement'}}
assert.deepEqual(obj1,{id:'1',name:{first:'David',second:'Clement'}})

assert.strictDeepEqual(obj1,{id:'1',name:{first:'David',second:'Clement'}})

// assert.strict.deepEqual(obj1,{id:'1',name:{first:'David',second:'Clement'}})

// assert.throws(()=>{
//     add('5','5'),Error('Number type required')
// })

assert.doesNotThrow(()=>{add(5,5)})