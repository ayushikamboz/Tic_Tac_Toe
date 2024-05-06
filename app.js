let boxes = document.querySelectorAll(".box")
let reset_btn = document.querySelector("#reset");
let turnO = true;
let newGameBtn=document.querySelector("#new_btn");
let winMsg = document.querySelector("#win");
let winContainer = document.querySelector(".win_container");

const patternArray = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],  
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];
const resetGame=()=>{
  turnO = true;
 enableBoxes();
 winContainer.classList.add("hide");
}
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    }
    else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
  });

});

const enableBoxes=()=>{
  for(box of boxes){
    box.disabled=false
      box.innerText=""
  }
}
const disableBoxes=()=>{
  for(box of boxes){

    box.disabled=true;
  }
}

const showWinner=(winPerson)=>{
 
  winMsg.innerText= `Congartulations, Winner is ${winPerson}`;
  winContainer.classList.remove("hide");
  disableBoxes();
}

const checkWinner = () => {
  for (let pattern of patternArray) {
    let val1 = boxes[pattern[0]].innerText;
    let val2 = boxes[pattern[1]].innerText;
    let val3 = boxes[pattern[2]].innerText;
    
    if (val1 != "" && val2 != "" && val3 != "") {
      if (val1 === val2 && val2 === val3) {
             showWinner(val1);
      }
    }
  }

}

newGameBtn.addEventListener("click",resetGame);
reset_btn.addEventListener("click",resetGame);
