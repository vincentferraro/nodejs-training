class Telephone{
    constructor(name){
        this.name = name
    }

    dring(){ console.log(`${this.name} :  driing driing`)}
}

class Smartphone extends Telephone{
    constructor(name, model){
        super(name+' the smartphone')
        this.model = model
    }
    biip(){ console.log(`${this.name} : biip biip`)}
}

const phone = new Smartphone('Iphone')

phone.dring()
phone.biip()