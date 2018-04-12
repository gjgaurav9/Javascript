let val;

val = 5;
console.log(val);// output 5
console.log(type of val); //number
console.log(val.length); // undifined will come as length is only defined for Strings

*same scenerio just convert 5 into String first.

val = String(5);
console.log(val);// output 5
console.log(type of val); //String 
console.log(val.length); // 1 will come as the output 

// Number to string
val = String(555);
val = String(4+4);
// Bool to string
val = String(true);
// Date to string
val = String(new Date());
// Array to string
val = String([1,2,3,4]);

// toString()
val = (5).toString();
val = (true).toString();

// String to number

val = '5'
console.log(val);
console.log(type of val);
console.log(val.toFixed());

val = Number('5'); 5, Number, 5
val = Number(true); 1 , Number., 1
val = Number(false); 0, Number, 0
val = Number(null); 0, Number, 0
val = Number('hello'); NaN(Not a Number), Number , NsN
val = Number([1,2,3]); NaN, Number, NaN.

val = parseInt('100.30'); 100, Number, 100
val = parseFloat('100.30'); 100, Number, 100.30(arguments passed
in toFixed() method)

// Output
// console.log(val);
// console.log(typeof val);
// //console.log(val.length);  

const val1 = String(5);
const val2 = 6;
const sum = Number(val1 + val2);

console.log(sum); //Output will be 56 as it will concate the values. 

console.log(typeof sum);// Number
