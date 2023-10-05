// CUSTOM ERROR WITH CODE


class OddError extends Error{
    constructor(name=''){
        super(name + ' must be even')
        this.code = 'MUST_BE_EVEN'
    }

    get name(){ return `OddError [ ${this.code} ]`}
}

function isNumber(number){
    if(typeof number !== 'number') throw new TypeError('not a number')
    else if(number >=10) throw new RangeError('Must be less than 10')
    else if(number%2) throw new OddError('Number')
    else console.log('Is the number :' + number)
}


module.exports ={ OddError, isNumber}