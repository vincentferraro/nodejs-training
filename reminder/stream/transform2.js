const { Transform }=require('stream');

const createTransform = ()=>{
    return new Transform({
        decodeStrings:false,
        encoding:'hex',
        transform(chunk,encod,next){
            if(chunk){
                const uppercase = chunk;
                next(null, uppercase);
            }
        }
    })
}

const transform = createTransform();

transform.on('data',(data)=>{
    console.log('got data', data.toString());
})

transform.write('test');
transform.write('test2');
transform.write('test3');
