// elements
const character = document.getElementById("character");
const block = document.getElementById("block");
const scoreSpan = document.getElementById("scoreSpan");
const highScoreSpan = document.getElementById("highScoreSpan");
// variables
let score = 0;
let highScore = 0;

function jump() {
  if (character.classList == "animate") {
    return;
  }
  character.classList.add("animate");
  setTimeout(function () {
    character.classList.remove("animate");
  }, 600);
}


var checkDead = setInterval(function () {
  let characterTop = parseInt(
    window.getComputedStyle(character).getPropertyValue("top")
  );
  let blockLeft = parseInt(
    window.getComputedStyle(block).getPropertyValue("left")
  );
  if (blockLeft < 40 && blockLeft > 0 && characterTop >= 130) {
    highScoreSpan.innerHTML = Math.floor(highScore/100);
    block.style.animation = "none";
    alert("Game Over. score: " + Math.floor(score / 100));
    score = 0;
    block.style.animation = "block 3s infinite linear";
    
} else {
    score++;
    highScore = score > highScore ? score : highScore;
    scoreSpan.innerHTML = Math.floor(score / 100);
  }
}, 10);