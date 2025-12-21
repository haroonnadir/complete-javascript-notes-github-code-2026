let a = 7;
let b = 14;
let c = 9;
console.log( "a+b+c =" , a+b+c);
console.log( "a-b+c =" , a-b+c);
console.log( "a+b*c =" , a+b*c);
console.log( "a-b/c =" , a-b/c);
console.log( "a%b =" , a%b);
console.log( "a**b**c =" , a*b**c);
console.log( "b++" , b++);

let count = 1;
while (count <= 5) {
  console.log('Count:', count);
  count++;
}

let d = 5
let e = 10
// d *= 4 ;
// console.log ("d=" , d); // 20


//Truthy and Falsy Values

const truthyValue = "hello";
const falsyValue = 0;

if (truthyValue) {
  console.log("Truthy value encountered!");
} else {
  console.log("Falsy value encountered!");
}

if (falsyValue) {
  console.log("Truthy value encountered!");
} else {
  console.log("Falsy value encountered!");
}
//output 
//Truthy value encountered!
//Falsy value encountered


console.log ("5==10" , d==e); // false 
console.log ("5 != 10", d != e )// true

//if and elase
// Here's a simple example in JavaScript:
let age = 25;
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

// Conditions ka matlab hai code ko decision based chalana.
// 1️⃣ Simple if statement
if (age >= 18) {
    console.log("Adult"); // Output: Adult
}

// 2️⃣ if...else statement
if (age < 18) {
    console.log("Minor");
} else {
    console.log("Adult"); // Output: Adult
}

// 3️⃣ if...else if...else statement
if (age < 13) {
    console.log("Child");
} else if (age < 18) {
    console.log("Teenager");
} else if (age < 60) {
    console.log("Adult"); // Output: Adult
} else {
    console.log("Senior");
}

// 4️⃣ Ternary Operator (short form)
let status = age >= 18 ? "Adult" : "Minor";
console.log(status); // Output: Adult

// 5️⃣ Switch statement
let day = 5; // new day value
switch(day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday"); // Output: Friday
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}