// constructors

function Book(title, actor,year, ){
    this.title = title;
    this.actor = actor
    this.year = year;


    this.getSummary = function(){
        return `${this.title} was acted by ${this.actor} in the year ${this.year}`;
    };
}

//instantiate constructors

const Book1 = new Book('power I','Ghost', 2014);
const Book2 = new Book('Power II', 'Tariq', 2018);

console.log(Book1.getSummary());