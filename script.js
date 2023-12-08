let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#out-btn");
let msgContainer = document.querySelector(".play");


let turnO = true;
let count = 0; // for draw match

const winpattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],

];

const resetGame = () => {
  turnO = true;
  count = 0;
  enableBoxes();
  msgContainer.classList.add("hide");
};
const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};
const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

boxes.forEach((box) => {
   box.addEventListener("click" , () => {
    console.log("Hey, clicked")
    if (turnO === true ) {
      box.innerText = "O" ;
      turnO = false ;
    
    }
    else {
      box.innerText = "X" ;
      turnO = true ;
      
    }
    box.disabled = true;
    count++;

    let isWinner = checkWinner();

    if (count === 9 && !isWinner) {
      gameDraw();
    }
   });
});
const showWinner = (winner) => {
  msgContainer.innerText = `Congratulations, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};
const checkWinner = () => {
  for (let pattern of winpattern) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val);
        return true;
      }
    }
  }
};
resetbtn.addEventListener("click", resetGame);