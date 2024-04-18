
function Book1(title,author, pages){
        this.title=title;
       this.author=author;
        this.pages = pages;
}


Book1.prototype.displayInfo = function(){
    console.log(`Title : ${ this.title}`);
    console.log(`Author : ${ this.author}`);
    console.log(`Pages number : ${this.pages}`);

}


function Ebook1(title, author, pages,format){
    Book1.call(this,title,author,pages)
    this.format = format;
}
Ebook1.prototype.displayInfo = function(){
   Book1.prototype.displayInfo.call(this)
    console.log(`Format : ${this.format}`);
}



const b1 = new Book1('test','autho1',200);
b1.displayInfo()
console.log('  ')
const ebook2 = new Ebook1('test2','author2',200,'EPUB');
ebook2.displayInfo()