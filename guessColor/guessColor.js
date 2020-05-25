// buttons
let startButton = document.querySelector("#startGame");
let xHelpBox = document.querySelector("#xHelpBox");
let helpBox = document.querySelector("#helpBox");
let questionBTN = document.querySelector("#row2button5");
let endBTN = document.querySelector("#row1button5");

const availableColors = {
    0: "rgb(33, 33, 209)", // blue
    1: "rgb(33, 136, 33)", // green
    2: "rgb(180, 30, 30)", // red
    3: "rgb(238, 238, 33)", // yellow
    4: "rgb(94, 33, 155)", // violet
    5: "rgb(243, 89, 33)", // orange
};

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
            getRandomColor();

            break;
        }
    }
}

function openWelcomePage() {
    welcomePage.classList.toggle("displayNone");
    difficulty = null;
}

//RULES PAGE

// open and close the rules / help box page

function openCloseRules() {
    helpBox.classList.toggle("displayNone");
}

// get the random colors

function GameColors(randomColors) {}

// object 0-5
// colorBullet1 => blue
// colorBullet2 => green
// colorBullet3 => red
// colorBullet4 => yellow
// colorBullet5 => violet
// colorBullet6 => orange

function getRandomColor() {
    let randomColorArray = [];
    for (let i = 0; i < 4; i++) {
        let getRandomNumber = Math.floor(Math.random() * 6);
        randomColorArray.push(getRandomNumber);
    }
    return randomColorArray;
}

// Calling functions

//get times from local storage

//Event Listeners

endBTN.addEventListener("click", openWelcomePage);
questionBTN.addEventListener("click", openCloseRules);
xHelpBox.addEventListener("click", openCloseRules);
startButton.addEventListener("click", setDifficulty);
