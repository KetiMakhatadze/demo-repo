// alert("Hello World");

// let age = 30;
// age = 31;

// console.log(age);

// const age = 30;
// age = 31;

// console.log(age);


// let score;
// score = 10;

// console.log(score);

// const name = 'Keti';
// const age = 13;
// const rating = 3.32;
// const isCool = true;
// const x = null;
// const y = undefined;
// let z;

// console.log(typeof x);



// const name = 'Keti';
// const age = 13;

// console.log('My name is ' + name + ' and i am ' + age );
// console.log(`My name is ${name} and i am ${age}`);

// const hello = 'My name is ' + name + ' and i am ' + age ;

// console.log(hello);


// const s = "Hello World!";

// console.log(s.length);
// console.log(s.toUpperCase());
// console.log(s.toUpperCase());
// console.log(s.substring(0, 5));
// console.log(s.split(''));


// const s = "technology, computers, it, code";
// console.log(s.split(', '));

// const numbers = new Array(1, 2, 3, 4, 5);
// console.log(numbers);


// const fruits = ['apples', 'oranges', 'pears'];
// fruits[3] = 'grapes';
// fruits.push('mangos');
// fruits.unshift('strawberries');
// fruits.pop();
// console.log(Array.isArray(fruits));
// console.log(fruits.indexOf('oranges'));
// console.log(fruits);


// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 45,
//     hobbies: ['volleyball', 'music', 'movies'],
//     address: {
//         street: '50 main st',
//         city: 'Boston',
//         state: 'MA',
//     }
// }

// person.email = 'john@gmail.com';
// console.log(person);


// const todos = [
//     {
//         id: 1,
//         text: 'Take out trash',
//         isCompleted: true
//     },
//     {
//         id: 2,
//         text: 'Meeting with boss',
//         isCompleted: true
//     },
//     {
//         id: 3,
//         text: 'Dentist appt',
//         isCompleted: false
//     },

// ]

// console.log(todos);




// const todos = [
//     {
//         id: 1,
//         text: 'Take out trash',
//         isCompleted: true
//     },
//     {
//         id: 2,
//         text: 'Meeting with boss',
//         isCompleted: true
//     },
//     {
//         id: 3,
//         text: 'Dentist appt',
//         isCompleted: false
//     },

// ]

// const todoJSON = JSON.stringify(todos);
// console.log(todoJSON);


// for(let i=0; i<10; i++){
//     console.log(i);
//     console.log(`For Loop Number: ${i}`);
// }

// for (let i = 0; i < todos.length; i++){
//     console.log(todos[i].text);
// }

// for(let todo of todos){
//     console.log(todo.isCompleted);
// }


// const todos = [
//     {
//         id: 1,
//         text: 'Take out trash',
//         isCompleted: true
//     },
//     {
//         id: 2,
//         text: 'Meeting with boss',
//         isCompleted: true
//     },
//     {
//         id: 3,
//         text: 'Dentist appt',
//         isCompleted: false
//     }
// ]

// todos.forEach(function(todo) {
//     console.log(todo.text);
// });


// const todoText = todos.map (function(todo) {
//     return todo.text;
// });
// console.log(todoText);

// const todoCompleted = todos.filter (function (todo) {
//     return todo.isCompleted === true;
// }).map(function(todo){
//     return todo.text;
// })
// console.log(todoCompleted);





// const x = 4;
// const y = 11;

// if( x > 5 || y > 10) {
//     console.log('x is more than 5 or y is more than 10');
// }


// const x = 1;
// const color = 'green';

// switch (color) {
//     case 'red':
//         console.log('color is red');
//         break;
//     case 'blue':
//         console.log('color is blue');
//         break;
//     default:
//         console.log('color is NOT red or blue');
//         break;

// }


// function addNums(num1 = 2, num2 = 3) {
//     console.log(num1+num2);
// }

// addNums();

// function Person (firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date (dob);
//     this.getBirthYear = function() {
//         return this.dob.getFullYear();
//     }
//     this.getFullName = function() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }
// const person1 = new Person('John', 'Doe', '4-3-1980');
// const person2 = new Person('Mary', 'Smith', '3-4-1970');
// console.log(person2.dob);

// console.log(person1.getBirthYear());
// console.log(`${person1.getFullName()} ${person2.getFullName()}`);


// function Person (firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date (dob);
// }

// Person.prototype.getBirthYear = function() {
//     return this.dob.getFullYear();
// }

// Person.prototype.getFullName = function() {
//     return `${this.firstName} ${this.lastName}`;
// }


// const person1 = new Person('John', 'Doe', '4-3-1980');
// const person2 = new Person('Mary', 'Smith', '3-4-1970');

// console.log(person2.getFullName());
// console.log(person1);



class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date (dob);
    }

    getBirthYear() {
        return this.dob.getFullYear();
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

const person1 = new Person('John', 'Doe', '4-3-1980');
const person2 = new Person('Mary', 'Smith', '3-4-1970');

console.log(person2.getFullName());
console.log(person1);