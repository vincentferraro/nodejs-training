const fs = require('fs');

async function bufferReverse(){

    const file = await fs.readFile('input.txt',(err,data)=>{
        if(err) throw err;
        console.log(data)
        return data;
    });
    console.log(file);
    if(file === 'undefined') throw new Error('no file')
    const buffer = Buffer.from(file);
    const bufferReversed = Buffer.from(buffer.toString().split('').reverse().join(''));
    fs.writeFileSync('output.txt',bufferReversed);
}


 fs.readFile('input.txt',(err,data)=>{
    if(err) throw err;
    const bufferReversed = Buffer.from(data.toString().split('').reverse().join(''));
    fs.writeFileSync('output.txt',bufferReversed);
});
    

// try{
//     bufferReverse()

// }catch(err){
//     console.log('Error detected :',err)
// }