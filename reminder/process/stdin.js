

process.stdin.on('data',(data)=>{

    const upperCase = data.toString().toUpperCase();
    process.stdout.write(`STDIN says : ${upperCase.toString()}`)
})

process.stdout.on('beforeExit',()=>{
    process.stdout.write('Bye!')
})