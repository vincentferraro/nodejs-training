class Wolf{
    constructor(name){
        this.name = name
    }

    howl(){
        console.log(`${this.name} : awooo`)
    }
}

const wolfi = new Wolf("Wolfi")

wolfi.howl()

class Dog extends Wolf{
    constructor(name){
        super(name + ' the dog')
    }

    woof(){
        console.log(`${this.name} : wooof woof`)
    }
}

const rufus = new Dog('Rufus')
rufus.woof()

console.log(Object.getPrototypeOf(Dog) === Wolf)