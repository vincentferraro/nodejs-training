'use strict'
const { test } =require('tap')

const req = require('../test-harnesses/req-prom.js')

test('handle network error',async({rejects})=>{
    await rejects(req('http://error.com'),Error('network error'))
})

test('responds with data',async({ ok, strictDeepEqual})=>{
    const data = await req('http://example.com')
    ok(Buffer.isBuffer(data))
    strictDeepEqual(data, Buffer.from('some data'))
})