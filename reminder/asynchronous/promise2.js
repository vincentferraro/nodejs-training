
function isString(str){
    return new Promise((resolve, reject)=>{
        if(typeof str === "string"){
            resolve(str.toUpperCase())
        }else{
            reject('type string needed')
        }
})}

async function willWait(){
    return new Promise((resolve)=>{
        setTimeout(()=>resolve('resolved'),1000)
    })
}
async function start(){
    try{
        console.log('step1');
        const res =await willWait()
        console.log(res)
    }catch(err){
        console.log(err)
    }

}

start()