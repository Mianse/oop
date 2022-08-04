//object of protos
const bookProtos = {
    getSummary: function(){
        return `${this.title} was acted by ${this.author}
         in the year ${this.year}`;
    },

    getAge: function(){
        const age = new Date().getFullYear() - this.year;
         return `${this.title} is ${age}  years old`;
        },
    
    
}

//create object

const book1 = Object.create(bookProtos,{
    title:{ value: 'damianse'},
    author:{ value:  'damian orina'},
    year: {value: 2020}
})

//book1.title='Damianse';
//book1.author='damian orina';
//book1.year='2010';



console.log(book1.getSummary());
