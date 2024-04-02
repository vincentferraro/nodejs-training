console.log(__filename);
console.log(__dirname);

const path =require('path');

console.log('out', path.join(__dirname,"test.txt"));

const fromPath = '/home/user/project';
const toPath = '/home/user/project/subdirectory/file.txt';

console.log(path.relative(fromPath, toPath));

console.log(path.parse(__filename));

const { readFileSync, writeFileSync }=require('fs');

const file = readFileSync(__filename,'utf8');

console.log(file);

writeFileSync(path.join(__dirname,"fileUpper.txt"),file.toUpperCase());