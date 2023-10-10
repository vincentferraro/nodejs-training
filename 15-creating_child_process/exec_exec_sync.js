'use strict'
const { execSync } = require('child_process')

// const output = execSync(
//     `node -e "console.log('subprocess stdio output')"`
// )
// console.log(output.toString())


const cmd = process.platform === 'Win32'?'dir': 'ls'
const output2 = execSync(cmd)
console.log(output2.toString())