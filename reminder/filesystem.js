const fs = require('fs');
const {join }= require('path')
const file = fs.readFileSync(__filename,'utf8')
console.log(file)

fs.writeFileSync(join(__dirname,'out2.txt'),file.toUpperCase())