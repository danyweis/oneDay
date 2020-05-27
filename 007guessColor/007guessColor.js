// buttons
let startButton = document.querySelector("#startGame");
let xHelpBox = document.querySelector("#xHelpBox");
let helpBox = document.querySelector("#helpBox");
let questionBTN = document.querySelector("#row2button5");
let endBTN = document.querySelector("#row1button5");
let color1BTN = document.querySelector("#row1button1");
let color2BTN = document.querySelector("#row1button2");
let color3BTN = document.querySelector("#row1button3");
let color4BTN = document.querySelector("#row2button1");
let color5BTN = document.querySelector("#row2button2");
let color6BTN = document.querySelector("#row2button3");
let validBTN = document.querySelector("#row1button4");
let backBTN = document.querySelector("#row2button4");

// GLOBAL VARIABLES

let gameOver = document.querySelector(".gameOver");
let currentTime = document.querySelectorAll(".currentTime");
let resultWindow = document.querySelector(".resultWindow");
let guessTheColor = document.querySelector(".guessTheColor");
let newBestTime = document.querySelector("#newBestTime");

// store all the changes in the HTML to reset everything at the end of the game
let changesArray = [];

// if gameOn is false we don't react on the input of the user
let gameOn = false;

// count will be incremented when one row is full and validated
let countRows = 1;

// round will count the user inputs
let round = 1;

let userInputNumbers = [];

// OBJECT TO STORE USER INPUT
const userInputStorage = {}; // Look how to empty the

// END GLOBAL VARIABLES

//WELCOME PAGE

// get out of the welcome page
let difficulty = 2; // <== set difficulty to 8 to test the game <== (AWAY)
let welcomePage = document.querySelector("#welcome");

function setDifficulty() {
    //get an array with all the radios
    let difficultyRadio = document.getElementsByName("difficulty");

    // go over the array and get the selected difficulty
    for (let i = 0; i < difficultyRadio.length; i++) {
        if (difficultyRadio[i].checked) {
            difficulty = difficultyRadio[i].value;
            welcomePage.classList.toggle("displayNone");
            //Start the gme in asking rof first random colors
            getRandomColor();

            break;
        }
    }
}

function backToWelcomePage() {
    validBTN.classList.remove("waitForAction");
    // reset all the styling
    resetAllTheCSS();
    welcomePage.classList.toggle("displayNone");
    // reset array, object and difficulty
    resetAllTheData();
}

//RULES PAGE

// open and close the rules / help box page
function openCloseRules() {
    helpBox.classList.toggle("displayNone");
}

function resetTimeScorePageValues() {
    resetAllTheCSS();
    resetAllTheData();
    round = 1;
    countRows = 1;
    getRandomColor();
    gameOn = true;
}

function resetAfterTimeScorePage() {
    console.log("hello");
    guessTheColor.classList.remove("displayNone");
    resultWindow.classList.add("displayNone");
    timeScorePage.classList.toggle("displayNone");
    resetTimeScorePageValues();
}

//TIME SCORE PAGE
let timeScorePage = document.querySelector(".timeScore");

function timeScore() {
    guessTheColor.classList.toggle("displayNone");
    resultWindow.classList.toggle("displayNone");
    timeScorePage.classList.toggle("displayNone");
    let restartTimeScorePage = document.querySelector("#playButton");
    restartTimeScorePage.addEventListener("click", resetAfterTimeScorePage);
}

function resetGameOverPage() {
    // if time implemented
    gameOver.classList.toggle("displayNone");
    newBestTime.classList.toggle("displayNone");

    // for (let i = 0; i < currentTime.length; i++) {
    //     currentTime[i].classList.toggle("displayNone");
    // }
}

function gameOverPage() {
    // removes displayNone class
    guessTheColor.classList.toggle("displayNone");
    resultWindow.classList.toggle("displayNone");
    gameOver.classList.toggle("displayNone");
    newBestTime.classList.toggle("displayNone");

    // If time implemented
    // for (let i = 0; i < currentTime.length; i++) {
    //     currentTime[i].classList.toggle("displayNone");
    // }

    timeScorePage.classList.remove("displayNone");
    let restartTimeScorePage = document.querySelector("#playButton");
    restartTimeScorePage.addEventListener("click", resetAfterTimeScorePage);
    restartTimeScorePage.addEventListener("click", resetGameOverPage);
    // currentTime.map((a) => a.classList.toggle("displayNone"));
}

// START THE GAME GET THE RANDOM COLORS

// colorBullet1 => blue
// colorBullet2 => green
// colorBullet3 => red
// colorBullet4 => yellow
// colorBullet5 => violet
// colorBullet6 => orange

function getRandomColor() {
    let randomColorArray = [];
    for (let count = 1; count <= 4; count++) {
        let placeholderArray = [];

        // get the random color
        let getRandomNumber = Math.ceil(Math.random() * 6);
        document.querySelector(`#resultColor${count}`).classList.toggle(`colorBullet${getRandomNumber}`);

        placeholderArray.push(`#resultColor${count}`);
        placeholderArray.push(`colorBullet${getRandomNumber}`);

        // put in the changesArray what was changed in the html
        changesArray.push(placeholderArray);

        // randomColorArray is used later to compare with the user input
        randomColorArray.push(getRandomNumber);
    }
    gameOn = true;
    userInputStorage.randomColor = randomColorArray;
    console.log(randomColorArray);
}

function getUserInput(pushedColor) {
    const userPlaceholder = [];
    if (countRows <= difficulty) {
        if (pushedColor >= 1 && pushedColor <= 6 && round <= 4) {
            // userPlaceholder.push(pushedColor);
            document.querySelector(`#row${countRows}ChoiceColor${round}`).classList.toggle(`colorBullet${pushedColor}`);

            // push the id and the classList to reset them later
            userPlaceholder.push(`#row${countRows}ChoiceColor${round}`);
            userPlaceholder.push(`colorBullet${pushedColor}`);

            //push placeholder in changesArray
            changesArray.push(userPlaceholder);

            round++;

            // push the pressed key to userInputNumbers
            userInputNumbers.push(pushedColor);
        } else if (pushedColor === "back" && round !== 1 && round <= 5) {
            // pop out the last array from the

            document.querySelector(`${changesArray[changesArray.length - 1][0]}`).classList.toggle(`${changesArray[changesArray.length - 1][1]}`);

            round--;

            // take last elements out of the arrays
            changesArray.pop();
            userInputNumbers.pop();
        } else if (pushedColor === "valid" && round === 5) {
            // DO THE MAGIC LOOK IF THE COLORS ARE CORRECT
            // get the data to the object
            userInputStorage[countRows] = userInputNumbers;
            userInputNumbers = [];
            round = 1;

            //This will look if we did win
            checkIfWin();

            // If we did not win we have to look if the colors are correct
            checkCorrectColors();

            countRows++;
            // console.log(countRows);
        }
        if (round == 5) {
            validBTN.classList.add("waitForAction");
        } else {
            validBTN.classList.remove("waitForAction");
        }
    }

    // to see what is pushed
    // console.log(pushedColor);
}

// just looks if WIN or NOT
function checkIfWin() {
    for (let n = 0; n < userInputStorage["randomColor"].length; n++) {
        if (userInputStorage["randomColor"][n] !== userInputStorage[countRows][n]) {
            console.log(countRows + " <= rows " + difficulty + " <= difficulty");

            if (countRows == difficulty) {
                console.log(currentTime);
                // currentTime.classList.toggle("displayNone");
                gameOverPage();
                // console.log("Game over");
                return;
            }
            return;
        } else if (n === userInputStorage["randomColor"].length - 1) {
            timeScore();
            console.log("You win the game");
            return true;
        } else {
            // do nothing
        }
    }
}
// check to put the dots on the left
function checkCorrectColors() {
    let randomArray = userInputStorage["randomColor"].slice();
    let userArray = userInputStorage[countRows].slice();
    let count = 1;

    count = lookForColorCCP(count, randomArray, userArray);
    if (randomArray.length > 0) {
        lookForColorCC(count, randomArray, userArray);
    }
}

// we check if there are the same colors same place
function lookForColorCCP(count, randomArray, userArray) {
    for (let n = 0; n < randomArray.length; ) {
        if (userArray[n] === randomArray[n]) {
            randomArray.splice(n, 1);
            userArray.splice(n, 1);
            correctColorAndPlace(count);
            count++;
        } else {
            n++;
        }
    }
    return count;
}

// we look if the rest of the colors have some the same colors
function lookForColorCC(count, randomArray, userArray) {
    // for debugging
    // console.log(`GO IN LOOP user => ${userArray} random => ${randomArray}`);
    for (let n = 0; n < randomArray.length; ) {
        if (userArray.indexOf(randomArray[n]) !== -1) {
            let mustGo = userArray.indexOf(randomArray[n]);
            randomArray.splice(n, 1);
            userArray.splice(mustGo, 1);
            correctColorNotPlace(count);
            count++;
        } else {
            n++;
        }
    }
}

// we change the style by adding classes to the HTML of the matching colors not same place
function correctColorNotPlace(count) {
    let placeholderArray = [];
    document.querySelector(`#row${countRows}color${count}`).classList.toggle(`correctColorCC`);
    placeholderArray.push(`#row${countRows}color${count}`);
    placeholderArray.push(`correctColorCC`);
    changesArray.push(placeholderArray);
}
// we change the style by adding classes to the HTML of the matching colors at the same place
function correctColorAndPlace(count) {
    let placeholderArray = [];
    document.querySelector(`#row${countRows}color${count}`).classList.toggle(`correctColorCCP`);
    placeholderArray.push(`#row${countRows}color${count}`);
    placeholderArray.push(`correctColorCCP`);
    changesArray.push(placeholderArray);
}

// reset all the HTML CSS when go to welcome page or win or lose the game
function resetAllTheCSS() {
    for (let n = 0; n < changesArray.length; n++) {
        document.querySelector(`${changesArray[n][0]}`).classList.toggle(`${changesArray[n][1]}`);
    }
    // we reset the object before resetting countRows
    resetTheObject(countRows);
    countRows = 1;
    round = 1;
}

// reset the object to become empty
function resetTheObject(countRows) {
    for (let n = 1; n <= countRows; n++) {
        delete userInputStorage[n];
    }
    delete userInputStorage["randomColor"];
}

// reset all the data when go to welcome page or win or lose the game
function resetAllTheData() {
    userInputNumbers = [];
    changesArray = [];
    // difficulty = null;
}

// Actions for the event listeners
function color1Pushed() {
    gameOn ? getUserInput(1) : "";
}
function color2Pushed() {
    gameOn ? getUserInput(2) : "";
}
function color3Pushed() {
    gameOn ? getUserInput(3) : "";
}
function color4Pushed() {
    gameOn ? getUserInput(4) : "";
}
function color5Pushed() {
    gameOn ? getUserInput(5) : "";
}
function color6Pushed() {
    gameOn ? getUserInput(6) : "";
}
function backPushed() {
    gameOn ? getUserInput("back") : "";
}
function validPushed() {
    gameOn ? getUserInput("valid") : "";
}

//get times from local storage

// TODO: ADD LOCAL STORAGE TO SAVE THE BEST TIMES AND and save them

//Event Listeners
color1BTN.addEventListener("click", color1Pushed);
color2BTN.addEventListener("click", color2Pushed);
color3BTN.addEventListener("click", color3Pushed);
color4BTN.addEventListener("click", color4Pushed);
color5BTN.addEventListener("click", color5Pushed);
color6BTN.addEventListener("click", color6Pushed);
backBTN.addEventListener("click", backPushed);
validBTN.addEventListener("click", validPushed);
endBTN.addEventListener("click", backToWelcomePage);
questionBTN.addEventListener("click", openCloseRules);
xHelpBox.addEventListener("click", openCloseRules);
startButton.addEventListener("click", setDifficulty);
