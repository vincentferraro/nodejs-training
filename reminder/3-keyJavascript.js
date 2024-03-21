
// Function

const obj = { id : 1, fn : function(){ console.log("the number:",this.id)}};

obj.fn()

function fn(){console.log("this", this.id)};

fn.call(obj)


// FAT Arrow function

const add = (a,b)=> a+b

console.log(add(3,4))

const pow = (n)=>{
    return Math.pow(n,3)
}

console.log(pow(4))

// Protypal Inheritance


const wolf={
    howl : function(){console.log("hooooowwl")}
}
const dog = Object.create(wolf,{
    woof: { value : function(){ console.log(this.name+ ' woof')}}
}
   )

const rufus = Object.create(dog,{
    name:{ value: 'Rufus the dog'}
})

rufus.howl()

rufus.woof()


class Wolf{
    constructor(n){
        this.name = n;
    }

    howl(){
        console.log( this.name + " hoooowl")
    }
}
class Dog extends Wolf{
    constructor(name){
        super(name + "the dog")
    }

    woof(){
        console.log( this.name + " woof woof")
    }
}
const wolfy = new Wolf("Wolfy")

wolfy.howl()

const dogy = new Dog("Dogy");

dogy.woof();


// Closure scope

function closeScope(){
    let value = 0;
    return function(){
        value +=1
        return value;
    }
}

const addingOne = closeScope();

console.log(addingOne())
console.log(addingOne())
console.log(addingOne())


function initBooks (){
    let id = 0;
    return function(name, ){
        id +=1;
        return {
            id: id,
            name: name
        }
    }
}

const createBook= initBooks()

const book1 = createBook("Harry potter");
const book2 = createBook("Lord of the Ring");
console.log(book1)
console.log(book2)