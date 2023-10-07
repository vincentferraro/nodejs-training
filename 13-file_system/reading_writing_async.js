const { readFile, writeFile } = require('fs/promises')
const { join } = require('path')

async function run(){
    const content = await readFile(__filename,{ encoding:'utf8'})
    const out = join(__dirname,'outAsync2.txt')
    await writeFile(out,content.toUpperCase())
}

run().catch((err)=>{ console.error(err)})