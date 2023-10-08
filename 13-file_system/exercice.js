'use strict'
const assert = require('assert')
const { join, basename } = require('path')
const fs = require('fs')
const { writeFile, readdir } = require('fs')
const project = join(__dirname, 'project')
try { fs.rmdirSync(project, {recursive: true}) } catch (err) {}
const files = Array.from(Array(5), () => {
  return join(project, Math.random().toString(36).slice(2))
})
files.sort()
fs.mkdirSync(project)
for (const f of files) fs.closeSync(fs.openSync(f, 'w'))

const out = join(__dirname, 'out.txt')


function exercise () {
  console.log('exercice function')
  console.log(join(__dirname, 'poject'))
  readdir(join(__dirname,'project'), (err,files)=>{
    if(err){
      console.log('la')
      console.error(err)
      return
    }
    return files
    
  })
  const text = files.join(', ')
    writeFile(join(__dirname,'out.txt'), text,(err, content)=>{
      if(err){
        console.error(err)
        return
      }
      console.log(content)
    })
  // TODO read the files in the project folder
  // and write the to the out.txt file
}

exercise()
assert.deepStrictEqual(
  fs.readFileSync(out).toString().split(',').map((s) => s.trim()),
  files.map((f) => basename(f))
)
console.log('passed!')