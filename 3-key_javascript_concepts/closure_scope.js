// closure scope

function outerFn(){
    var foo = true
    function print(){ console.log(foo)}
    print()
    foo = false
    print()
}

// outerFn()

function outerFn2(){
    var foo = true
    function print(foo){ console.log(foo)}
    print(1)
    foo = false
    print(2)
    print(foo)
}
outerFn2()

// external call impossible

function outerFn3(){
    var foo = false
    function print(){ console.log(foo)}
    print()
}
outerFn3()
// console.log(foo) // Error

// Access variable from external call

function init(type){
    var id = 0
    return (name)=>{
        id+=1
        return { id: id, type: type, name: name}
    }
}
const user = init('users')
const georges = user("Georges")
console.log(georges)
const vladimir = user('Vladimir')
console.log(vladimir)