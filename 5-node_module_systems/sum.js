const add = (number)=>{
    let value = number
    return (add)=>{
        return value = value+add
    }
}

module.exports={
    add
}