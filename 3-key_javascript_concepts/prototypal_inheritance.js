const wolf = {
    howl: function(){ console.log(`${this.name}: awoooooo`)}
}

const dog = Object.create(wolf,{
    woof: {value:function(){ console.log(`${this.name}: woufwouf`)}}
})
const rufus = Object.create(dog,{
    name: { value : 'Rufus the dog'}
})

rufus.woof()
rufus.howl()



const engine={
    engine : function(){ console.log(`${this.name}: Wshhhhhhhhh`)}
}
const plane = Object.create(engine,{
    takeOff:{ value: function(){console.log(`${this.name}: taking off`)}}
})
const airbus = Object.create(plane,{
    name: { value: 'Airbus A380'}
})

const car = Object.create(engine,{
    start:{ value:function(){console.log(`${this.name} : vrouuum`)}}
})
const mercedes = Object.create(car,{
    name: {value: 'Mercedes'}
})
airbus.takeOff()
airbus.engine()
mercedes.start()
console.log("/////////////")
Object.getOwnPropertyDescriptor(car,'start')

function createDog( name){
    return Object.create(dog,{
        name:{value: `${name} the dog`}
    })
}
const georges = createDog('Georges')
georges.howl()

console.log(Object.getPrototypeOf(georges) === dog)
console.log(Object.getPrototypeOf(dog) === wolf)
