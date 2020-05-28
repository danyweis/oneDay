// get all the elements from the document

// values to change in HTML
let min = document.querySelector(".minutes");
let sec = document.querySelector(".seconds");
let ms = document.querySelector(".milliseconds");

//buttons to add event listeners
let start = document.querySelector(".start");
let stop = document.querySelector(".stop");
let reset = document.querySelector(".reset");

// addEventListener
start.addEventListener("click", startTheWatch);
stop.addEventListener("click", stopTheWatch);
reset.addEventListener("click", resetTheWatch);

// used to manage the time
let theInterval;
let timeMS = 0;
let timeSec = 0;
let timeMin = 0;

function startTheWatch() {
    if (start.classList.contains("active")) {
    } else {
        start.classList.toggle("active");
        stop.classList.toggle("active");
        theInterval = setInterval(timer, 10);
    }
}

function stopTheWatch() {
    if (stop.classList.contains("active")) {
    } else {
        start.classList.toggle("active");
        stop.classList.toggle("active");
        clearInterval(theInterval);
    }
}

function resetTheWatch() {
    timeMS = 0;
    timeSec = 0;
    timeMin = 0;
    ms.innerHTML = `00`;
    sec.innerHTML = `00`;
    min.innerHTML = `00`;
}

function timer() {
    if (timeMS == 99) {
        timeMS = 0;
        timeSec += 1;
    }
    if (timeSec == 59) {
        timeSec = 0;
        timeMin += 1;
    }
    timeMS += 1;

    ms.innerHTML = `0${timeMS}`.slice(-2);
    sec.innerHTML = `0${timeSec}`.slice(-2);
    min.innerHTML = `0${timeMin}`.slice(-2);
}
