'use strict'
const { exec } = require('child_process')

// exec(
//     `"${process.execPath}" -e "console.log('A'); console.error('B')"`,
//     (err, stdout, stderr)=>{
//         console.log('err',err)
//         console.log('Subprocess stdout', stdout.toString())
//         console.log('Subprocess stderr', stderr.toString())
//     }
// )


exec(
    `"${process.execPath}" -e "console.log('A'); throw Error('B')"`,
    (err, stdout, stderr)=>{
        console.log('err',err)
        console.log('Subprocess stdout', stdout.toString())
        console.log('Subprocess stderr', stderr.toString())
    }
)

