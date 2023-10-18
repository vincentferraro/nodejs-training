// Functionnal Inheritance

// const engine = {
//     vroum: function(){ console.log(`${this.name} : vrouuuum`)}
// }
// const car = Object.create(engine, {
//     tuut:{ value:function(){ console.log(`${this.name} : tuuut tuuut`)}}
// })
// const ferrari = Object.create(car,{
//     name:{value: "Ferrari"} ,
//     turbo: {value:function(){ console.log(`${this.name} : turbo activated`)}}
// })

// ferrari.vroum()
// ferrari.tuut()
// ferrari.turbo()

// Functionnal inheritance with constructor

function Engine(name){
    this.name = name
}

Engine.prototype.vroum=function(){
    console.log(`${this.name} : vrouuuum`)
}

function Car (name){
    Engine.call(this,`${name} the car`)
}
function inherit(proto){
    function ChainLink(){}
    ChainLink.prototype = proto
    return new ChainLink()
}
Car.prototype = inherit(Engine.prototype)
Car.prototype.tuut=function(){
    console.log(`${this.name} : tuut tuut`)
}

const twingo = new Car('twingo')

twingo.vroum()
twingo.tuut()

console.log(Object.getPrototypeOf())