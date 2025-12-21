// function
function sum(x,y) {
    s = x + y;
    return s;
}
let val = sum(10,25);
console.log(val);



// Function declaration
function greet(name) {
    return `Hello, ${name}!`;
  }
  const greeting = greet('Alice');
  console.log(greeting); // Output: Hello, Alice!
  
// Arrow Functions
const addNumbers = (a, b) => a + b;
const result = addNumbers(5, 10); // Call the arrow function
console.log(result); // Output: 15



const countvow=(str) =>{
    let count = 0;
    for (const char of str ){
        if(
            char === "a" || 
            char === "e" ||
            char === "i" || 
            char === "o" ||
            char === "u" 
        ){
            count++;
        }
    }
    return count;
}

// //Here's how you can use the forEach method:
// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach(function (element) {
//   console.log(element);
// });

//You can also access the index and the array itself within the callback function:
const num = [1, 2, 3, 4, 5];
num.forEach(function (element, index, array) {
  console.log(`Element at index ${index}: ${element}`);
  console.log('Full array:', array);
});

function toUpperCase(str) {
    return str.toUpperCase();
  }
  // Example usage:
  let lowercaseString = "hello";
  let uppercaseString = toUpperCase(lowercaseString);
  console.log(uppercaseString); // Output: HELLO
  
// map
// // The map() 
const originalArray = [{ name: 'Alice', age: 25 }, { name: 'Bob', age: 30 }];
// Map each object to a new object with a different property name
const renamedArray = originalArray.map((object) => ({
firstName: object.name,
lastName: object.age,
}));
console.log(renamedArray); // [{ firstName: 'Alice', lastName: 25 }, { firstName: 'Bob', lastName: 30 }]

// The reduce() 
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log('Numbers:', numbers);  // [1, 2, 3, 4, 5]
console.log('Sum:', sum);           // 15

let array=[5,10,2,210,101,250];
const output = array.reduce((reev,curr) => {
  return prev > curr ? prev : curr;
})
console.log(output);

//filter
const words = ['apple', 'banana', 'cherry', 'date'];
const startsWithB = words.filter(word => word.startsWith("b"));
console.log('Words: ', words);    // ['apple', 'banana', 'cherry', 'date']

let n = prompt("user enter a number:");
let arr =[];
for( let i=1 ; i<n ; i++){
  arr[i-1] = i;
}
console.log(arr);

let sum = arr.reduce((res, curr) =>{
  return res+curr;
})
console.log(sum);

let factorial = arr.reduce((res, curr) =>{
  return res * curr;
})
console.log(factorial);