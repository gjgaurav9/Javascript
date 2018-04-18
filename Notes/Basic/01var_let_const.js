Code notes: var, let, const

// var name = 'John Doe';
// console.log(name);

Value can be reassigned
// name = 'Steve Smith';
// console.log(name);

Init var
// var greeting
// console.log(greeting); //undefined will come.
// greeting = 'Hello';
// console.log(greeting);

// // letters, numbers, _, $
// // Can not start with number

// // Multi word vars
// var firstName = 'John'; // Camel case
// var first_name = 'Sara'; // Underscore
// var FirstName = 'Tom'; // Pascal case
// var firstname;

LET works same as var with few differences at block level
// let name;
// name = 'John Doe';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);


CONST once  the value being assigned can not be altered, it also need to be assigned while declaring
// const name = 'John';
// console.log(name);

 Can not reassign
// name = 'Sara';
// Have to assign a value
// const greeting;

---------------------------------------------------------------------------------
* Values are replacable in const when it comes to arrays and objects.
const person = {
  name: 'John',
  age: 30
}

person.name = 'Sara';
person.age = 32;

// console.log(person); //It will give you 32 as the output

const numbers = [1,2,3,4,5];
numbers.push(6);

console.log(numbers);