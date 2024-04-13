

export default function loading(timeInSeconds){
    const interval = setInterval(()=>{
        console.log('loading...')
    },1000)
    
    setTimeout(()=>{
        clearInterval(interval)
    },timeInSeconds*1000)
}
