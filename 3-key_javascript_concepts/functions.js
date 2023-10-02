function factory(){
    return function doSomething(){}
}

setTimeout(function(){console.log("Hello from the future")},1000)

const obj = { name: "Vin", fn: function(){console.log(`hello ${this.name}`)}}
const obj2 = { name: "Kad", fn: obj.fn}
// obj.fn()
// obj2.fn()

// Function with call() method
function fn(){ console.log(`hello ${ this.name}`)}
fn.call(obj)
fn.call({name:"Na"})

// arrow function
const add = (a,b)=> a+1
console.log(add(2,2))

const cube = (n)=>{
    return Math.pow(n,3)
}
console.log(cube(3))

// arrow function with call of fn()

function fn2(){
    return (offset)=>{
        console.log(this.id + offset)
    }
}

const obj3 = { id: 10}

const offseter = fn2.call(obj3)
offseter(100)
