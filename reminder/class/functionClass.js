const person ={
    name:'Vinc',getName: function(){ return this.name}, addition:function(a,b){return a+b}
}

const p2 = Object.create(person,{
    age :{value:32},
    getAge:function(){return this.age}
})


console.log(person.getName())

console.log(person.addition(1,3));

console.log(p2.age);