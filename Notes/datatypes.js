// PRIMITIVE: 6 primitive types in javascript.

// String
const name = 'John Doe';
// Number
const age = 45; 
// Boolean
const hasKids = true;
// Null
const car = null; // It will actually give the type as 'Object' instead of null. It is a bug in javascript.
// Undefined
let test;
// Symbol: It is newly added and it is the part of ES6.
const sym = Symbol();

// REFERENCE TYPES - They all can be called as Objects
// Array
const hobbies = ['movies', 'music'];
// Object literal
const address = {
  city: 'Boston',
  state: 'MA'
}
const today = new Date();
console.log(today);
console.log(typeof today);