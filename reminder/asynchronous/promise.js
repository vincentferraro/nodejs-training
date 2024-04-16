

const add = (a,b)=>{
    return new Promise((resolve,reject)=>{
        if((a +b)%2 === 0){
            resolve('a and b are even')
        }else{
            reject('need even sum')
        }
    })
}
add(2,3).then(res => console.log(res)).catch(err=> console.error('ERROR', err))
