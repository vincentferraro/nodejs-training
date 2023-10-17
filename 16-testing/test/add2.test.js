'use strict'
const { add } = require('../test-harnesses/add')
const { test } = require('@jest/globals')
test('throw when inputs are not numbers', async()=>{
    expect(()=>{ add(5,'5')}).toThrowError(Error('inputs must be a number'))
    expect(()=>{ add('5','5')}).toThrowError(Error('inputs must be a number'))
    expect(()=>{ add(5,'5')}).toThrowError('inputs must be a number')
})

test('add two numbers',async()=>{
    expect(add(5, 5)).toStrictEqual(10)
    expect(add(-5, 5)).toStrictEqual(0)
})