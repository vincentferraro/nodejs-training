'use strict'

const { execSync } = require('child_process')
const output = execSync(
    `${process.execPath} -e "console.log('subprocess stdio output')"`
)
console.log(output.toString())

// with Non zero exit file



// try{
//     execSync(`${process.execPath} -e "process.exit(1)"`)
// }catch(err){
//     console.error('CAUGHT ERROR: ', err)
// }

'use strict'

try {
  execSync(`"${process.execPath}" -e "throw Error('kaboom')"`)
} catch (err) {
  console.error('CAUGHT ERROR:', err)
}