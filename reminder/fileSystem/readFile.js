const { readFileSync}= require('fs');
const fs = require('fs');

const content = readFileSync(__filename);
// console.log(content.toString())

fs.readFile(__filename,(err, data)=>{
    if(err){
        throw err;
        return
    }else{
        console.log(data.toString())
    }
})

