let divs = document.querySelectorAll(".box");
for(div of divs){
    console.log(div.innerText);
}
divs[0].interText = "new value in box 1";
divs[1].interText = "new value in box 2";
divs[2].interText = "new value in box 3";