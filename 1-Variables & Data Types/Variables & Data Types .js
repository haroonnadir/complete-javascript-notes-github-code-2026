// for out out
console.log ("haroon nadir")

//Variables in js
// 1. var:
// 2. let:
// 3. const:

var x = 10;
if (true) {
  var x = 20;  // This redeclares the existing 'x' variable.
  var x =60;
  console.log(x);  // Outputs: 20
}

let y = 10;
{
  let y = 20;  // yeh different block ka variable hai
  console.log(y); // 20
}
console.log(y); // 10


const PI = 3.14159;
console.log("The value of PI is: " +PI );

//example 2
const GREETING = "Hello, World!";
console.log(GREETING);

// 2	Data Types & Type Conversion
// Types: Primitive and Non-primitive data types
// 2.1	Primitive 
// Primitive data types simple values hoti hain. Inki value directly store hoti hai 
// jin ki value replace ki ja skti ha change nhi ki ja skti.


// Number
let num1 = 25;
let num2 = 99.99;

// String
let str1 = "Salar";
let str2 = 'Hello World';

// Boolean
let bool1 = true;
let bool2 = false;

// Undefined
let ud1;
console.log(ud1); // undefined

// Null
let nl1 = null;

// Symbol
let sym1 = Symbol("id");

// BigInt
let big1 = 12345678901234567890n;


// 2.2	Non-primitive 
// Non-primitive Inki value reference ke through store hoti hai

// Object
let person = {
  name: "Salar",
  age: 20
};

// Array
let fruits = ["apple", "mango", "banana"];

// Function
function greet() {
  console.log("Hello World");
}

// ================================
// ALL-IN-ONE JavaScript Data Types
// ================================

// ================================
// 1️⃣ Primitive Data Types
// ================================

// Number
let nn1 = 25;        // integer
let nn2 = 99.99;     // float / decimal number

// String
let ss1 = "Salar";
let ss2 = 'Hello World';

// Boolean
let bb1 = true;
let bb2 = false;

// Undefined
let u1;  // variable declared but not assigned
console.log(u1); // undefined

// Null
let n1 = null;  // intentionally empty value

// Symbol
let sym1 = Symbol("id");

// BigInt
let big1 = 12345678901234567890n;

// ================================
// 2️⃣ Non-Primitive Data Types
// ================================

// Object
let person = {
  name: "Salar",
  age: 20
};

// Array
let fruits = ["apple", "mango", "banana"];

// Function
function greet() {
  console.log("Hello World");
}

// ================================
// 3️⃣ Type Conversion
// ================================
// String + Number → String
console.log("5" + 10);   // "510"  (number 10 string me convert ho gaya)

// String - Number → Number
console.log("10" - 2);   // 8     ("10" converted to number)

// Boolean → Number
console.log(true + 2);   // 3  (true → 1)
console.log(false + 5);  // 5  (false → 0)

// Number → Boolean
console.log(!!1);        // true
console.log(!!0);        // false

// Null → Number
console.log(null + 5);   // 5   (null → 0)

// String → Number
let str = "123";
console.log(Number(str));     // 123
console.log(parseInt(str));   // 123
console.log(parseFloat("12.56")); // 12.56

// Number → String
let num = 456;
console.log(String(num));     // "456"
console.log(num.toString());  // "456"

// Boolean → Number
console.log(Number(true));   // 1
console.log(Number(false));  // 0

// Number → Boolean
console.log(Boolean(0));     // false
console.log(Boolean(5));     // true
