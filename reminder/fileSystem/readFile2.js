
const { readFile,writeFile } = require('fs').promises  
const files = Array.from(Array(3)).fill(__filename)  
const print = (contents) => {  
  console.log(contents.toString())  
}

async function run () {  
  const readers = files.map( (file) =>  readFile(file))  
  const data = await Promise.all(readers)  
  print(Buffer.concat(data))  

    writeFile('output2.txt',Buffer.concat(readers).toString())
}

run().catch(console.error)