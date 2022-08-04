// constructors

function Book(title, author,year, ){
    this.title = title;
    this.author = author
    this.year = year;
}

//getSummary
Book.prototype.getSummary = function(){
    return `${this.title} was acted by ${this.author} in the year ${this.year}`;

}

//magazine constructor
function Magazine(title,author, year,month){
    Book.call(this,title,author,year);
    
    
    this.month= month
}
// inherit prototype
Magazine.prototype =Object.create(Book.prototype)

//use magazine prototype
Magazine.prototype.constructor = Magazine

//instantiate magazine
const magazine1 = new Magazine('thermosystem','dammyblaze','2021','jan')
console.log(magazine1.getSummary())