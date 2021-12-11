// Inputs
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let input3 = document.getElementById("input3");
let input4 = document.getElementById("input4");
let input5 = document.getElementById("input5");
let input6 = document.getElementById("input6");
let input7 = document.getElementById("input7");
let input8 = document.getElementById("input8");
let input9 = document.getElementById("input9");
let turnText = document.getElementById("turnText");

let arrInputs = [
  "1",
  input1,
  input2,
  input3,
  input4,
  input5,
  input6,
  input7,
  input8,
  input9,
];

// X -> Player One(first person to start the game)
// O -> Player Two(second person to start the game)
let turn = "X";
function mark(inputID) {
  if (turn == "X") {
    document.getElementById(inputID).value = "X";
    turn = "O";
    turnText.innerHTML = "Player O's turn"
} else {
    document.getElementById(inputID).value = "O";
    turn = "X";
    turnText.innerHTML = "Player X's turn"
  }
  document.getElementById(inputID).disabled = true;
}

function whoWin() {
    if(checkWin()=='X'){
        alert("X")
    }else if(checkWin() =='O'){
        alert("O")
    }//else{
    //     alert("Draw")
    // }
}


function checkWin() {
    if(checkHorizontal(1) == "X" || checkHorizontal(4) == "X" || checkHorizontal(7) == "X"){
        return 'X'   
    }if(checkHorizontal(1) == "O" || checkHorizontal(4) == "O" || checkHorizontal(7) == "O"){
        return 'O'
    }if(checkVertical(1) == "X" || checkVertical(2) == "X" || checkVertical(3) == "X"){
        return 'X'
    }if(checkVertical(1) == "O" || checkVertical(2) == "O" || checkVertical(3) == "O"){
        return 'O'
    }if(checkCrossLeft()=="X"){
        return 'X'
    }if(checkCrossLeft()=="O"){
        return 'O'
    }if(checkCrossRight()=="X"){
        return 'X'
    }if(checkCrossRight()=="O"){
        return 'O'
    }
    //arrInputs.forEach(x=> console.log(x.value))
}


function checkHorizontal(i) {// Yatay (1-4-7)
  if (arrInputs[i].value == "X") {
    if (arrInputs[i + 1].value == "X") {
      if (arrInputs[i + 2].value == "X") {
        return "X"
      }
    }
  }else if(arrInputs[i].value == "O"){
    if (arrInputs[i + 1].value == "O") {
        if (arrInputs[i + 2].value == "O") {
            return "O"
        }
      }
  }else{
    return 0
  }
}

function checkVertical(i) {//Dikey (1-2-3)
    if (arrInputs[i].value == "X") {
      if (arrInputs[i + 3].value == "X") {
        if (arrInputs[i + 6].value == "X") {
          return "X"
        }
      }
    }else if(arrInputs[i].value == "O"){
      if (arrInputs[i + 3].value == "O") {
          if (arrInputs[i + 6].value == "O") {
            return "O"
          }
        }
    }else{
        return 0
    }
  }
  function checkCrossRight() { //Sağ çapraz
    if (arrInputs[1].value == "X") {
      if (arrInputs[5].value == "X") {
        if (arrInputs[9].value == "X") {
          return "X"
        }
      }
    }else if(arrInputs[1].value == "O"){
      if (arrInputs[5].value == "O") {
          if (arrInputs[9].value == "O") {
            return "O"
          }
        }
    }else{
        return 0
    }
  }
  function checkCrossLeft() {// sol çapraz
    if (arrInputs[3].value == "X") {
      if (arrInputs[5].value == "X") {
        if (arrInputs[7].value == "X") {
          return "X"
        }
      }
    }else if(arrInputs[3].value == "O"){
      if (arrInputs[5].value == "O") {
          if (arrInputs[7].value == "O") {
            return "O"
          }
        }
    }else{
        return 0
    }
  }