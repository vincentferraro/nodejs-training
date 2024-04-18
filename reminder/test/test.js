"use strict";

const assert  = require('assert').strict;

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

assert.equal(add(2,2),4)
assert.equal(isString('hello'),true)
assert.throws(add('4',2),'integer needed')
assert.equal(isString('hello'),true)