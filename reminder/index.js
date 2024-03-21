'usestrict'

function prefixer(word){
    return function(name){
        return word +" "+ name
    }
}
const sayHiTo=prefixer('Hello')
const sayByeTo=prefixer('Goodbye')
console.log(sayHiTo('Dave'))//prints'HelloDave'
console.log(sayHiTo('Annie'))//prints'HelloAnnie'
console.log(sayByeTo('Dave'))//prints'GoodbyeDave'