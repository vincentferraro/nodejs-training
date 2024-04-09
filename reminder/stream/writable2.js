const { Writable}= require('stream');

const createWritable = (data)=>{
    return new Writable({
        decodeStrings:false,
        write(chunk,enc,next){
            if(chunk){
                data.push(chunk)
                next()
            }
        }
    })
}

const data = [];

const writable = createWritable(data);


writable.on('finish',()=>{
    console.log('finish to write',data)
})
writable.write('Hello\n');
writable.write('World');
writable.write('!');
writable.end('finish to write');


