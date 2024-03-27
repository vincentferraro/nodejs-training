
function addCallback(cb){
    return cb(null, 1)
}

console.log(addCallback((err, contents)=>{
    if(contents ==1){
        return true
    }
}))


