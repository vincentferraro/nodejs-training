'use strict'

const { spawn } = require('child_process')
// const sp = spawn(
//     process.execPath,
//     [`-e`,
//         `console.error('err output'); process.stdin.pipe(process.stdout)`],
//         { stdio:['pipe','inherit','pipe']}  // pass STDIN, STDOUT, STDERR
// )

// // sp.stdout.pipe(process.stdout)
// sp.stderr.pipe(process.stdout)
// sp.stdin.write('this input will become output\n')
// sp.stdin.end()

// pass option process.stdout

// const { spawn } = require('child_process')
// const sp2 = spawn(
//     process.execPath,
//     [`-e`,
//     `console.error('err output'); process.stdin.pipe(process.stdout)`
//     ],
//     {stdio: ['pipe','inherit',process.stdout]}
// )

// sp2.stdin.write('this input will become output\n')
// sp2.stdin.end()



const sp3 = spawn(
    process.execPath,
    [`-e`,
    `console.error('err output'); process.stdin.pipe(process.stdout)`
    ],
    {stdio: ['pipe','inherit','ignore']}
)

sp3.stdin.write('this input will become output\n')
sp3.stdin.end()

const { spawnSync } = require('child_process')
spawnSync(
    process.execPath,
    [`-e`,
    `console.error('err output'); process.stdin.pipe(process.stdout)`
    ],
    {
        input:`this input will become output\n`,
        stdio:['pipe','inherit','ignore']
    }
    
)
