let boxes = document.querySelectorAll(".box")
let reset_btn=document.querySelector("#reset");
let turnO=true;

const patternArray=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
  if(turnO){
     box.innerHTML="O";
     turnO=false;
  }
  else{
  box.innerHTML="X";
  turnO=true;
  }
  box.disabled=true;
});

});


console.log("from desktop");