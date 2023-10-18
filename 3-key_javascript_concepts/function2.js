// Object creation and import function already existing

function hello(){
    console.log(`Hello ${ this.firsrtName} ${this.lastName}`)
}
const obj1 = { id: 1, firsrtName: "Vincent", lastName:"Fe", hello:hello}


// console.log(obj1.id)
// obj1.hello()

// FAT ARROW FUNCTION


const fn = ()=>{ }
const fn2 = function(){

}
console.log(typeof fn)
console.log(typeof fn.prototype)

console.log(typeof fn2)
console.log(typeof fn2.prototype)