const assert = require('assert')
const  { add }= require('./addFunction.js')

assert.equal(add(2,2),4) // wil pass
// assert.strictEqual(add(2,2),'4') // Will throw an Error

const result = add(3,2)
assert.equal(result, 5)
assert.equal(typeof result, 'number')

// Assertion strictEqual

assert.strictEqual(add(2,2),'4')// will throw
assert.strict.equal(add(2,2),'4')

