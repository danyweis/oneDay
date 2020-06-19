function init() {
  let paperBtn = document.querySelector(".paperBtn");
  let rockBtn = document.querySelector(".rockBtn");
  let scissorsBtn = document.querySelector(".scissorsBtn");
  let resetBtn = document.querySelector(".resetBtn");
  let round = document.querySelector(".round");

  function buttonClicked() {
    round.textContent++;
    let you = document.querySelector(".bottomImg");
    let youValue = null;
    // Get the random value for the pc
    let pcGame = getPcGame();

    if (this.textContent == "Rock") {
      you.src = "017rockD.svg";
      youValue = 1;
    } else if (this.textContent == "Scissors") {
      you.src = "017scissorsD.svg";
      youValue = 2;
    } else {
      you.src = "017paperD.svg";
      youValue = 3;
    }
    givePoints(pcGame, youValue);
  }

  // function which get random value and sets image
  function getPcGame() {
    let pcImg = document.querySelector(".topImg");
    let pc = Math.ceil(Math.random() * 3);
    if (pc === 1) {
      pcImg.src = "017rockU.svg";
    } else if (pc === 2) {
      pcImg.src = "017scissorsU.svg";
    } else {
      pcImg.src = "017paperU.svg";
    }
    return pc;
  }

  let youScore = document.querySelector(".you");
  let pcScore = document.querySelector(".pc");
  function givePoints(pcVal, youVal) {
    if (pcVal === 3 && youVal === 1) {
      pcScore.textContent++;
    } else if (pcVal === 3 && youVal === 2) {
      youScore.textContent++;
    } else if (pcVal === 2 && youVal === 3) {
      pcScore.textContent++;
    } else if (pcVal === 2 && youVal === 1) {
      youScore.textContent++;
    } else if (pcVal === 1 && youVal === 3) {
      youScore.textContent++;
    } else if (pcVal === 1 && youVal === 2) {
      pcScore.textContent++;
    }
  }

  function resetScore() {
    round.textContent = 0;
    pcScore.textContent = 0;
    youScore.textContent = 0;
  }

  paperBtn.addEventListener("click", buttonClicked);
  rockBtn.addEventListener("click", buttonClicked);
  scissorsBtn.addEventListener("click", buttonClicked);
  resetBtn.addEventListener("click", resetScore);
}

window.addEventListener("load", init);
