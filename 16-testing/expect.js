const {expect} = require('expect')
const {add} = require('./addFunction.js')


expect(add(1,1)).toEqual(2)
expect(add(2,2)).toBe(5)