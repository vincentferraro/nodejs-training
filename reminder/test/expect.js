const {expect} = require('expect');



function add (a,b){
    if(typeof a !== 'number' | typeof b !== 'number') throw new TypeError('integer needed')
    return a+b
}

function isString(str){
    if(typeof str === 'string'){
        return true;
    }else{
        return false
    }
}

expect(add(1,1)).toEqual(2);