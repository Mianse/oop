class Book {
    constructor(title,author,year){
        this.title=title;
        this.author= author;
        this.year=year

    }

    getSummary(){
        
        return `${this.title} was acted by ${this.actor} in the year ${this.year}`;

    }
}


//subclass

class Magazine extends Book{
    constructor(title,author,year,month){
        super(title,author,year);
        this.month=month;

    }
}

const Book1 = new Book('spartacus','vin diesel','2019')

const Magazine1 = new Magazine('parents','cooljoe','2020','august');

console.log(Magazine1)



console.log(Book1.getSummary());