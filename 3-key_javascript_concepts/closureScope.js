function init(type){
    var id = 0
    return (name)=>{
        id +=1
        return { id: id, name: name,type: type, getName: ()=>{
            console.log(name)
        }}
    }
}

const createBook = init('book')
const book1 = createBook('Clear thinking')
console.log(book1)
book1.getName()
const book2 = createBook('Harry Potter')
console.log(book2)