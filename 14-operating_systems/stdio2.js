'use strict'
const fs = require('fs')
const myStdout = fs.createWriteStream(null, { fd:1})
const myStderr = fs.createWriteStream(null, { fd:2})
myStdout.write('stdout stream')
myStderr.write('stderr stream')