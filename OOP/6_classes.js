class Book {
constructor(title,author,year,){
this.title= title;
this.author= author;
this.year = year;
};

getSummary(){
    return `${this.title} was acted by ${this.author}
         in the year ${this.year}`;
}

getAge(){
    return `${this.title} is ${age}  years old`;

}

revise(newYear){
    this.year=newYear
    this.revised=true

}
}

//instantiate object

const Book1 = new Book('electronics','mianse','2015');

console.log(Book1);
Book1.revise('2021')
console.log(Book1)