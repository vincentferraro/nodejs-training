function exitAfter5sec(){

    setInterval(()=>{
        console.log("bip")
    },1000)

    setTimeout(()=>{
        process.exit()
    },5000)
}


exitAfter5sec()