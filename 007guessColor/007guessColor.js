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

// colorBullet1 => blue
// colorBullet2 => green
// colorBullet3 => red
// colorBullet4 => yellow
// colorBullet5 => violet
// colorBullet6 => orange

// store all the changes in the HTML to reset
// everything at the end of the game
let changesArray = [];

// if gameOn is false we don't react on the input of the user
let gameOn = false;

// OBJECT TO STORE USER INPUT
const userInputStorage = {};

//WELCOME PAGE

// get out of the welcome page
// ==> set difficulty to null to play the game <== AWAY
let difficulty = 8;
let welcomePage = document.querySelector("#welcome");

function setDifficulty() {
    //get an array with all the radios
    let difficultyRadio = document.getElementsByName("difficulty");

    // go over the array and get the selected difficulty
    for (let i = 0; i < difficultyRadio.length; i++) {
        if (difficultyRadio[i].checked) {
            if (difficultyRadio[i].value === "easy") {
                difficulty = 12;
            } else if (difficultyRadio[i].value === "medium") {
                difficulty = 10;
            } else {
                difficulty = 8;
            }
            welcomePage.classList.toggle("displayNone");
            //Start the gme in asking rof first random colors
            getRandomColor();

            break;
        }
    }
}

function openWelcomePage() {
    console.log(changesArray);

    for (let n = 0; n < changesArray.length; n++) {
        document.querySelector(`${changesArray[n][0]}`).classList.toggle(`${changesArray[n][1]}`);
    }
    // console.log(changesArray);

    if (round < 5) {
        document.querySelector(`#row${countRows}ChoiceColor${round}`).classList.toggle("waitForAction");
    }

    countRows = 1;
    round = 1;

    document.querySelector(`#row${countRows}ChoiceColor${round}`).classList.toggle("waitForAction");

    changesArray = [];
    // console.log(`empty ${changesArray}`);
    welcomePage.classList.toggle("displayNone");
    difficulty = null;
}

//RULES PAGE

// open and close the rules / help box page

function openCloseRules() {
    helpBox.classList.toggle("displayNone");
}

// GET THE RANDOM COLORS

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

// count will be incremented when one row is full and validated
let countRows = 1;

// round will count the user inputs
let round = 1;

function getUserInput(pushedColor) {
    const userPlaceholder = [];
    if (countRows <= difficulty) {
        if (pushedColor >= 1 && pushedColor <= 6 && round <= 4) {
            // userPlaceholder.push(pushedColor);
            // document.querySelector(`#row${countRows}ChoiceColor${round}`).classList.toggle(`colorBullet`);
            document.querySelector(`#row${countRows}ChoiceColor${round}`).classList.toggle(`colorBullet${pushedColor}`);

            // push the id and the classList to reset them later
            userPlaceholder.push(`#row${countRows}ChoiceColor${round}`);
            userPlaceholder.push(`colorBullet${pushedColor}`);

            //push placeholder in changesArray
            changesArray.push(userPlaceholder);
            document.querySelector(`#row${countRows}ChoiceColor${round}`).classList.toggle("waitForAction");
            round++;

            // when the last color is set the wait for action does not continue
            if (round < 5) {
                document.querySelector(`#row${countRows}ChoiceColor${round}`).classList.toggle("waitForAction");
            }
        } else if (pushedColor === "back" && round !== 1 && round <= 5) {
            // pop out the last array from the

            // document.querySelector(`${changesArray[changesArray.length - 1][0]}`).classList.toggle(`colorBullet`);
            document.querySelector(`${changesArray[changesArray.length - 1][0]}`).classList.toggle(`${changesArray[changesArray.length - 1][1]}`);
            if (round !== 5) {
                document.querySelector(`#row${countRows}ChoiceColor${round}`).classList.toggle("waitForAction");
            }

            document.querySelector(`${changesArray[changesArray.length - 1][0]}`).classList.toggle("waitForAction");
            round--;
            changesArray.pop();
        } else if (pushedColor === "valid" && round === 5) {
            // DO THE MAGIC LOOK IF THE COLORS ARE CORRECT
            round = 1;
            countRows++;
            document.querySelector(`#row${countRows}ChoiceColor${round}`).classList.toggle("waitForAction");

            console.log("lets do this");
        }
    } else {
        // GAME OVER
    }
    // to see what is pushed
    console.log(pushedColor);
}

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

//Event Listeners

color1BTN.addEventListener("click", color1Pushed);
color2BTN.addEventListener("click", color2Pushed);
color3BTN.addEventListener("click", color3Pushed);
color4BTN.addEventListener("click", color4Pushed);
color5BTN.addEventListener("click", color5Pushed);
color6BTN.addEventListener("click", color6Pushed);
backBTN.addEventListener("click", backPushed);
validBTN.addEventListener("click", validPushed);
endBTN.addEventListener("click", openWelcomePage);
questionBTN.addEventListener("click", openCloseRules);
xHelpBox.addEventListener("click", openCloseRules);
startButton.addEventListener("click", setDifficulty);
