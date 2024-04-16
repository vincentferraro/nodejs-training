const { readFile} = require('fs');
const arr = Array.from(Array(3)).fill(__filename);
let i = 0;
const cb = (err,data)=>{
    if(err){
        console.error('Error',err)
        return
    }else{
        console.log('Here data :', data.toString())
        if(i<arr.length){
            i++;
            readFile(arr[i],cb)
        }else{
            return
        }
    }
}
readFile(arr[i],cb);


