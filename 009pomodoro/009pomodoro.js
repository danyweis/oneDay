// buttons

const start = document.querySelector(".start");
const stop = document.querySelector(".stop");
const reset = document.querySelector(".reset");

// Animation
animation = document.querySelector(".timeAnimation");
container = document.querySelector(".container");
pomodoro = document.querySelector(".pomodoro");
work = document.querySelector(".work");
doBreak = document.querySelector(".doBreak");

let minF = 25;
let minB = 5;
let sec = 0;
let focus = true;
let theInterval = null;

function startPomodoro() {
    if (start.classList.contains("active")) {
        if (minF == 25 && minB == 5 && sec == 0) {
            pomodoro.classList.toggle("displayNone");
            container.style.backgroundColor = "#549471";
        }
        if (minF == 25 && sec == 0 && focus == true) {
            work.classList.toggle("displayNone");
        }
        theInterval = setInterval(timer, 1000);
        start.classList.toggle("active");
        stop.classList.toggle("active");
    } else {
        // do nothing
    }
}
function stopPomodoro() {
    if (stop.classList.contains("active")) {
        clearInterval(theInterval);
        start.classList.toggle("active");
        stop.classList.toggle("active");
    }
}
function resetPomodoro() {
    clearInterval(theInterval);
    minF = 25;
    minB = 5;
    sec = 0;
    focus = true;
    theInterval = null;
    container.style.backgroundColor = "#f5f5f5";
    animation.style.right = "0px";
    animF = 0;
    if (pomodoro.classList.contains("displayNone")) {
        pomodoro.classList.toggle("displayNone");
        if (work.classList.contains("displayNone")) {
            doBreak.classList.toggle("displayNone");
        } else {
            work.classList.toggle("displayNone");
        }
    }
    if (stop.classList.contains("active")) {
        start.classList.toggle("active");
        stop.classList.toggle("active");
    }
}

if (!focus) {
    animation.style.right = "-1200px";
}

let animF = 0;

function timer() {
    if (focus) {
        container.style.backgroundColor = "#549471";
        animF -= 1;
        animation.style.right = `${animF}px`;
        sec -= 1;
        if (sec < 0) {
            minF -= 1;
            if (minF < 0 && sec < 0) {
                focus = false;
                minF = 25;
                animF = -1200;
                sec = 0;
                work.classList.toggle("displayNone");
                doBreak.classList.toggle("displayNone");
                alert("Take a break");
                return;
            }
            sec = 59;
        }
    } else {
        container.style.backgroundColor = "#7b6430";
        sec -= 1;
        animF -= 1;
        animation.style.right = `${animF}px`;
        if (sec < 0) {
            minB -= 1;
            if (minB < 0 && sec < 0) {
                focus = true;
                minB = 5;
                animF = 0;
                sec = 0;
                work.classList.toggle("displayNone");
                doBreak.classList.toggle("displayNone");
                alert("Get back to work");
                return;
            }
            sec = 59;
        }
    }
}

// event listener
start.addEventListener("click", startPomodoro);
stop.addEventListener("click", stopPomodoro);
reset.addEventListener("click", resetPomodoro);
