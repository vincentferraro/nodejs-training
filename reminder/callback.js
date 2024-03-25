const { readFile} = require('fs')


const files = Array.from(Array(3).fill(__filename));

// readFile(files[0],(err,contents)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(contents.toString())
//         readFile(files[1],(err,contents)=>{
//             if(err){
//                 console.log(err)
//             }else{
//                 console.log(contents.toString())
//                 readFile(files[2],(err,contents)=>{
//                     if(err){
//                         console.log(err)
//                     }else{
//                         console.log(contents.toString())}
//                 })
//             }
//         })
//     }
// })


function promising(num1, num2){
    return new Promise((res, rej)=>{
        if((num1 + num2)%2==0){
            res("Result EVEN")
        }else{
            rej("Result ODD")
        }
})
}
promising(1+3).then(res => console.log( res)).catch(err => console.log(err))