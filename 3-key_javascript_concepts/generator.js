let addValue = function*(){
    let value = 0;
    while(true){
        value +=1
        yield value;
    }
}

const gen = addValue()
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)