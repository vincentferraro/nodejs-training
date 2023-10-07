'use strict'

console.log('current_filename',__filename)
console.log('current_dirname',__dirname)

const path = require('path')
// console.log('out_file',join(__dirname,'out.txt'))

console.log('/////////')
console.log(path.resolve('foor','bar','hello','kitty'))
console.log(path.normalize('\\bar\\\hello'))

const fromPath = '/home/user/project';
const toPath = '/home/user/project/subdirectory/file.txt';

// Calculate the relative path from 'fromPath' to 'toPath'
const relativePath = path.relative(fromPath, toPath);

console.log(`Relative Path: ${relativePath}`); // print Relative Path: subdirectory/file.txt