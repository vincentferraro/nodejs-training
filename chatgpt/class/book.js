'use strict';

class Book{
    title;
    author;
    pages;
    isbn;

    constructor(title, author, pages, isbn){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isbn = isbn;
    }

    displayInfo(){
        console.log(`Title : ${ this.title}`);
        console.log(`Author : ${ this.author}`);
        console.log(`Pages number : ${this.pages}`);
        console.log(`ISBN : ${ this.isbn}`);

    }
}

class Ebook extends Book{
    format;

    constructor(title, author, pages, isbn, format){
        super(title,author,pages,isbn);
        this.format = format;
    }

    displayInfo(){
        super.displayInfo();
        console.log(`Format : ${this.format}`)

    }

}

const ebook1 = new Ebook('Harry potter','JK Rowling',200,1234,'EPUB');
const book1 = new Book('The lord of the rings',' Tolkien', 800,2344);
ebook1.displayInfo();
console.log('   ')
book1.displayInfo();