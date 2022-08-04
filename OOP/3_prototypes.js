// constructors

function Book(title, actor,year, ){
    this.title = title;
    this.actor = actor
    this.year = year;
}

//getSummary
Book.prototype.getSummary = function(){
    return `${this.title} was acted by ${this.actor} in the year ${this.year}`;

}
//getAge
Book.prototype.getAge = function(){
    
    const age = new Date().getFullYear() - this.year;

    return `${this.title} is ${age}  years old`;
}
//revise change year
Book.prototype.revise = function(newYear){
    this.year = newYear
    this.revised = true
}

//instantiate constructors

const Book1 = new Book('power I','Ghost', 2014);
const Book2 = new Book('Power II', 'Tariq', 2018);

console.log(Book1.getAge());

console.log(Book1);
Book1.revise('2020');

console.log(Book1.getAge())


