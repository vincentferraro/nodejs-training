const animal = {
    name: 'Kitty',
    run: function(){ console.log('Animal running')}
}

const dog = Object.create(animal,{
    woof : { value: function(){ console.log('woof woof')}}
})

console.log(animal.name)
animal.run()

console.log(dog.name)
dog.run()
dog.woof()