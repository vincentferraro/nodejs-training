const { Transform}=require('stream');
const {scrypt} = require('crypto')

const createTransformStream = (data)=>{
    return new Transform({
        decodeStrings:false,
        encoding:'hex',
        transform(chunk,enc,next){
            scrypt(chunk,'salt',32,(err,derivedKey)=>{
                if(err){
                    next(err)
                    return
                }else{
                    next(null,derivedKey)
                }
            })
        }
    })
}

const transform = createTransformStream();

transform.on('data',(data)=>{
    console.log('got data', data)
})

transform.write('A');
transform.write('B');
transform.write('C');

transform.end('no more data')