
function createPromise(a,b,time){
    const result = a +b
    return new Promise((resolve, reject)=>{
        if(result%2 === 0) setTimeout(resolve(`Pair`),time)
        else reject(`Unpair`)
    })
}

const data = []

// const test = createPromise(2,3,1000).then(res => console.log(res)).catch(err => console.log(err))
// const test2 = createPromise(2,2,500).then(res => console.log(res)).catch(err => console.log(err))
  
data.push(createPromise(2,3,1000))
data.push(createPromise(2,2,500))
async function timeOut(message, time){
    setTimeout(()=>{
        console.log(message)
    },time)
}
Promise.all(data).then((values)=>console.log(values)).catch((err)=>console.log('error',err))
async function awaitPromise(){
    const res1 = await timeOut("hello",1000)
    const res2 = await timeOut("Bye",500)
    console.log(res1)
    console.log(res2)

}
awaitPromise()