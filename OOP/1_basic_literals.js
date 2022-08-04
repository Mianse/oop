//using methods on a string or primitives
//const D = 'damian';

//console.log(typeof D)
 
//const D1 = new String('Damian')

//console.log(typeof D1)

//console.log(window)

//window.alert('damian')

//console.log(navigator.appVersion);

//object literals
Book1 = {
    title: 'POWER I',
    actor: 'Ghost',
    year: 2014,
    getSummary: function(){
        return `${this.title} was acted by ${this.actor} in the year ${this.year}`;
    }
}

console.log(Book1.getSummary());

Book2 = {
    title: 'POWER II',
    actor: 'Tariq',
    year: 2018,
    getSummary: function(){
        return `${this.title} was acted by ${this.actor} in the year ${this.year}`;
    }
}

console.log(Book2.getSummary());

console.log(Object.values(Book2));
console.log(Object.keys(Book2));