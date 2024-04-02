const fs = require('fs');

console.log('Before');
fs.readFile(__filename,'utf8',(err,data)=>{
    if(err){
        console.error('Error')
        return
    }
    console.log(data);
})
console.log('AFTER')