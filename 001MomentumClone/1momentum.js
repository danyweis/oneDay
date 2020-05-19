// This variable is just to see it is 12 or 24HR true => 24hr
let timeFormat = true;
// function to set the time
const showTime = function () {
    const today = new Date();
    const hours = today.getHours();
    const minutes = today.getMinutes();
    const seconds = today.getSeconds();
    const body = document.getElementById("body");
    const time = document.getElementById("time");
    const hello = document.getElementById("hello");
    //set the timeFormat to 12 or 24
    if (timeFormat) {
        time.innerHTML = `${hours}:${("0" + minutes).slice(-2)}:${(
            "0" + seconds
        ).slice(-2)}`;
    } else {
        time.innerHTML = `${hours > 12 ? hours - 12 : hours}:${(
            "0" + minutes
        ).slice(-2)}:${("0" + seconds).slice(-2)} ${hours < 12 ? "AM" : "PM"}`;
    }
    // // Set focus back to zero
    // if (hours === 23 && minutes === 59 && secondes === 59)
    //     localStorage.setItem("focus", '"Your Focus"');

    // call the function every second
    setTimeout(showTime, 1000);
};

function backGround() {
    const today = new Date();
    const hours = today.getHours();

    //set the background img
    if (hours < 12) {
        hello.innerHTML = "Good morning,";
        body.style.backgroundImage = "url(1momentumMorning.jpg)";
        body.style.backgroundSize = "cover";
        body.style.backgroundPosition = "center";
    } else if (hours < 18) {
        hello.innerHTML = "Good afternoon,";
        body.style.backgroundImage = "url(1momentumAfternoon.jpg)";
        body.style.backgroundSize = "cover";
        body.style.backgroundPosition = "center";
        body.style.color = "white";
    } else {
        hello.innerHTML = "Good evening,";
        body.style.backgroundImage = "url(1momentumNight.jpg)";
        body.style.backgroundSize = "cover";
        body.style.backgroundPosition = "center";
        body.style.color = "white";
    }
}

//give the button a first value of 12hr
const hrs12or24 = document.getElementById("hrs12or24");
hrs12or24.innerHTML = "12hr";

// on click we toggle between 12hr and 24hr
let timeMetric = hrs12or24.addEventListener("click", () => {
    const hrs12 = hrs12or24.classList.toggle("hrs12");
    if (hrs12or24.classList.contains("hrs12")) {
        hrs12or24.innerHTML = "24hr";
        timeFormat = false;
    } else {
        hrs12or24.innerHTML = "12hr";
        timeFormat = true;
    }
    showTime();
});

const name = document.getElementById("name");
const focus = document.getElementById("focus");

// set the name and the focus
function setName(e) {
    if (e.type === "keypress") {
        // Have to be enter key
        if (e.keyCode === 13 || e.which === 13) {
            localStorage.setItem("name", e.target.innerText);
            // do name.blur() to avoid to go to next line
            name.blur();
        }
    } else {
        localStorage.setItem("name", e.target.innerText);
    }
}
function setFocus(e) {
    if (e.type === "keypress") {
        // Have to be enter key
        if (e.which === 13 || e.keyCode === 13) {
            localStorage.setItem("focus", e.target.innerText);
            // do name.blur() to avoid to go to next line
            focus.blur();
        }
    } else {
        localStorage.setItem("focus", e.target.innerText);
    }
}

// get the name and focus out of localstorage
function getName() {
    if (localStorage.getItem("name") === null) {
        name.textContent = '"Your Name"';
    } else {
        name.textContent = localStorage.getItem("name");
    }
}
function getFocus() {
    if (localStorage.getItem("focus") === null) {
        focus.textContent = '"Your Focus"';
    } else {
        focus.textContent = localStorage.getItem("focus");
    }
}

name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);
focus.addEventListener("keypress", setFocus);
focus.addEventListener("blur", setFocus);

showTime();
backGround();
getName();
getFocus();
