// Creating with Constructor function


function Wolf(name){
    this.name = name
}

Wolf.prototype.howl = function(){
    console.log(`${this.name} :  awooooo`)
}
function Dog(name){
    Wolf.call(this, name + ' the dog')
}

function inherit(proto){
    function ChainLink(){}
    ChainLink.prototype = proto
    return new ChainLink()
}

Dog.prototype = inherit(Wolf.prototype)

Dog.prototype.woof = function(){
    console.log( `${this.name} : woof`)
}

const rufus = new Dog('Rufus')

rufus.woof()