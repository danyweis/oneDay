// buttons
let startButton = document.querySelector("#startGame");
let xHelpBox = document.querySelector("#xHelpBox");
let helpBox = document.querySelector("#helpBox");
let questionBTN = document.querySelector("#row2button5");
let endBTN = document.querySelector("#row1button5");

//WELCOME PAGE

// get out of the welcome page
let difficulty = null;
let welcomePage = document.querySelector("#welcome");

function setDifficulty() {
    //get an array with all the radios
    let difficultyRadio = document.getElementsByName("difficulty");

    // go over the array and get the selected difficulty
    for (let i = 0; i < difficultyRadio.length; i++) {
        if (difficultyRadio[i].checked) {
            difficulty = difficultyRadio[i].value;
            welcomePage.classList.toggle("displayNone");
            console.log(difficulty);
            break;
        }
    }
}

function openWelcomePage() {
    welcomePage.classList.toggle("displayNone");
    difficulty = null;
    console.log(difficulty);
}

//RULES PAGE

// open and close the rules / help box page

function openCloseRules() {
    helpBox.classList.toggle("displayNone");
}

//Event Listeners

endBTN.addEventListener("click", openWelcomePage);
questionBTN.addEventListener("click", openCloseRules);
xHelpBox.addEventListener("click", openCloseRules);
startButton.addEventListener("click", setDifficulty);
