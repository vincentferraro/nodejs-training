function add(v1, v2){
    if(typeof a !== 'number' || typeof b !== 'number'){
        throw Error(`Must be a number`)
    }
    return v1+v2
}
module.exports = { add}