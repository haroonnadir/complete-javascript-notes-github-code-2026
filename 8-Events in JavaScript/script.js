// let button1 = document.querySelector("#button1");
// button1.onclick =() =>{
//     console.log("button1 was clicked");
//     let a =25;
//     a++;
//     console.log(a)
// // }

// // let div = document.querySelector("div");
// // div.onmouseover = () => {
// //     console.log("you are inside div");
// // }

// let button1 = document.querySelector("#button1");
// button1.addEventListner("click", (evt) => {
//     console.log("button1 was clicked");
// })


// button1.addEventListner("click", (evt) => {
//     console.log("button1 was clicked");
// })

let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currMode = "light";
modeBtn.addEventListener("click" , () => {
    if (currMode === "light") {
        currMode = "dark"; 
        body.classList.add("dark");
        body.classList.remove("light");

    }
    else{
        currMode = "light";
        body.classList.add("light");
        body.classList.remove("dark");

    }

    console.log(currMode);
})

