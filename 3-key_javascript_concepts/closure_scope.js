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

function createSigner(secret){
    const keypair = createKeypair(secret) // Fake function
    return function (content){
        return {
            signed: cryptoSign(content, keypair.privateKey), //fake function
            publicKey: keypair.publicKey
        }
    }
}

// const sign = createSigner('superSecret')
// const result = sign("test")


// Inheritance with closure scope function

function Wolf(name){
    const howl = ()=>{
        console.log(`${name} : awoooo`)
    }
    return { howl : howl}
}

function Dog(name){
    name = name + ' the dog'
    const woof = ()=>{
        console.log(`${name} : woof`)
    }
    return {
        ...Wolf(name),
        woof: woof
    }
}
console.log("/////")
const rufus = Dog('Rufus')
rufus.howl()
rufus.woof()
const wolf = Wolf('Wolf')
wolf.howl()

function prefixer(word){
    const prefixer = word
    return (name)=>{
        return `${prefixer} ${name}`
    }
}
const sayHiTo = prefixer('Hello')
const sayByeTo = prefixer('Bye')
console.log(sayByeTo('Henri'))
console.log(sayHiTo('Annie'))