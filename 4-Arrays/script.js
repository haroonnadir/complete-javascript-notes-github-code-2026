// let marks =[97,0,10 ,15,59,59];
// for (let i = 0; i < marks.length; i++) {
//     console.log(marks[i]);    
// }

let cities= ["Lahore","Faisalabad","Rawalpindi","Gujranwala", "Peshawar","Multan","Hyderabad","Islamabad","Quetta","Karachi"]
console.log(cities);
//example

let marks =[97,80,90,85,99,59];
let sum = 0;
for (let val of marks){
    sum += val;
}

let avg = sum/marks.length;
console.log(`avg marks of the class = ${avg}`);

// Push:
// const fruits_1 = ['apple', 'banana'];
// fruits.push('cherry');
// console.log(fruits_1);  // Output: ['apple', 'banana', 'cherry']


// Pop: 
//Example using Pop
// const fruits = ['apple', 'banana', 'cherry'];
// const removedFruit = fruits.pop();
// console.log(removedFruit);  // Output: 'cherry'
// console.log(fruits);        // Output: ['apple', 'banana']

// Shift: 
// The shift method is used to remove the first element from an array. It modifies the original array and returns the removed element.
// // //Example using shift
// const fruits = ['apple', 'banana', 'cherry'];
// const removedFruit = fruits.shift();
// console.log(removedFruit);  // Output: 'apple'
// console.log(fruits);        // Output: ['banana', 'cherry']

// //Example using unshift
// const fruits = ['banana', 'cherry'];
// fruits.unshift('apple');
// console.log(fruits);  // Output: ['apple', 'banana', 'cherry']

