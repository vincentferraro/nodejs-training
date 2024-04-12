
function Engine(name){
    this.name = name
}

Engine.prototype.vroom=function(){
    console.log('vrooommm')
}
const e = new Engine()
e.vroom()


function Vehicule(name){
    Engine.call(this, name+' the vehicule')
}

Vehicule.prototype = Object.create(Engine.prototype);

Vehicule.prototype.start =function(){
    console.log(this.name +' is started')
}

const v1 = new Vehicule('merceddes');

v1.start()
v1.vroom()