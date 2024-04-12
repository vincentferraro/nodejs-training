class Engine{
    #name ='';

    constructor(name){
        this.#name = name;
    }

    vroom(){
        console.log('vrooom');
    }
}


class Vehicule extends Engine{

    

    constructor(name){
        super(name+ ' the vehicule')
    };

    start(){
        console.log(this.name + ' started!');
    }
}

const v1 = new Vehicule('mercedes');

console.log(v1.name);
v1.vroom();
