
const { Writable }=require('stream');


const createWritable = (data)=>{
    return new Writable({
        decodeStrings:false,
        write(chunk, enc, next){
            data.push(chunk);
            next();
        }
    })
}

const data = [];

const writable = createWritable(data);

writable.write('A');
writable.write('B');
writable.write('C');

writable.end('nothing to write');

for(const d of data){
    console.log(d)
}