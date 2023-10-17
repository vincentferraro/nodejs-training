const req = require('../test-harnesses/req')

test('handle network error',(done)=>{
    req('http://example.com',(err)=>{
        expect(err).toStrictEqual(Error('network error'))
        done()
    })
})

test('response with data',(done)=>{
    req('http://error.com',(err, data)=>{
        expect(err === null).toBe(true)
        expect(Buffer.isBuffer(data)).toBeTruthy()
        expect(data).toStrictEqual(Buffer.from('some data'))
        done()
    })

})