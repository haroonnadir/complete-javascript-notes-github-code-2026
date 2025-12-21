let sum = 0;
for (let i = 1; i <= 5; i++) {
    sum =sum +i;
}
console.log("sum =", sum);

for (let i = 1; i <= 5; i++) {
    console.log(i);  
}


// let count = 1;
// while (count <= 5) {
//   console.log('Count:', count);
//   count++;
// }

let count = 1;
do {
  console.log('Count:', count);
  count++;
} while (count <= 10);

// For of loop
const numbers = [1, 2, 3, 4, 5,];
for (const number of numbers) {
  console.log(number);
}

// For In loop
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30
  };
  
  for (const key in person) {
    console.log(`${key}: ${person[key]}`);
  }

  //pirnt 0 to 100

//Example using continue in a for loop:
for (let i = 1; i <= 100; i++) {
    //===0 for even
    if (i % 2 === 0) {
        console.log(i); // Skip even numbers, move to the next iteration
    }
    
  }
  
//!==0 for odd
  for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
        console.log(i); // Skip even numbers, move to the next iteration
    }
  }
  
//prctice 
let gamenum = 25 ;
let usernum = prompt ("guess user game number:");
//prompot mans that user sa value lana 
while(usernum != gamenum){//game number
    usernum = prompt ("guess user game number again:");
}
console.log("you enter right num");


let user1 = {
    name: "Salar"
};

console.log(user2.profile?.age); 
// Output: undefined (no error)
