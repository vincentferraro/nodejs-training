const { exec } = require('child_process');

exec('ls',(error, stdout, stderr)=>{
    if(error){
        console.log(`Error Occured : ${ error}`);
        return
    }
    if(stderr){
        console.log(`Stderr occured : ${ stderr }`);
        return
    }

    console.log( stdout)
});