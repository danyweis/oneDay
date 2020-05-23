// not Safari

let submit = document.querySelector("#submit");
let showAge = document.querySelector("#showAge");

let today = new Date();
let year = today.getFullYear();
let month = ("0" + (today.getMonth() + 1)).slice(-2);
let day = ("0" + today.getDate()).slice(-2);

let dateControl;
let dateArr;

let dateSafariY = document.querySelector("#dateSafariY");
let dateSafariM = document.querySelector("#dateSafariM");
let dateSafariD = document.querySelector("#dateSafariD");

// look if it si safari because type date does not work in safari
let isSafari =
    navigator.vendor &&
    navigator.vendor.indexOf("Apple") > -1 &&
    navigator.userAgent &&
    navigator.userAgent.indexOf("CriOS") == -1 &&
    navigator.userAgent.indexOf("FxiOS") == -1;

// after with if statement send to safari or normal function

if (isSafari) {
    document.querySelector("#birthday").style.display = "none";
    document.querySelector(".safariBox").style.display = "block";
}

function checkKey(e) {
    if (e.which === 13 || e.keyCode === 13) {
        calculation();
    }
}

window.addEventListener("keypress", checkKey);

submit.addEventListener("click", calculation);

function calculation(dateArr) {
    if (isSafari) {
        dateArr = [
            dateSafariY.valueAsNumber,
            ("0" + dateSafariM.valueAsNumber).slice(-2),
            ("0" + dateSafariD.valueAsNumber).slice(-2),
        ];
    } else {
        dateControl = document.querySelector('input[type="date"]');
        dateArr = dateControl.value.split("-");
        if (dateControl.value === "") {
            showAge.innerHTML = `Thank you for giving a valid date!`;
            return;
        }
    }
    console.log(dateArr);
    // [YEAR, MONTH, DAY]

    if (month == dateArr[1] && day == dateArr[2] && year >= dateArr[0]) {
        showAge.innerHTML = `Happy Birthday <i class="fas fa-gift"></i> today you are now ${
            year - dateArr[0]
        } years old. <i class="fas fa-birthday-cake"></i>`;
    } else if (
        dateArr[0] > year ||
        (year == dateArr[0] && month < dateArr[1]) ||
        (year == dateArr[0] && month == dateArr[1] && day < dateArr[2])
    ) {
        showAge.innerHTML = `Can you tell me where to invest? Looks like you are from the future`;
    } else {
        let nextBday;
        showAge.innerHTML = `You are ${year - dateArr[0]} years old.`;
        if (dateArr[1] < month || (dateArr[1] == month && dateArr[2] < day)) {
            nextBday = new Date(year + 1, dateArr[1] - 1, dateArr[2]);

            showAge.innerHTML = `You are ${
                year - dateArr[0]
            } years old and <br> your next B-Day is in ${Math.floor(
                (nextBday.getTime() - today.getTime()) / 1000
            )} seconds <br> or ${Math.floor(
                (nextBday.getTime() - today.getTime()) / 1000 / 60
            )} minutes <br> or ${Math.floor(
                (nextBday.getTime() - today.getTime()) / 1000 / 60 / 60
            )} hours <br> or ${Math.floor(
                (nextBday.getTime() - today.getTime()) / 1000 / 60 / 60 / 24
            )}days.`;
        } else {
            nextBday = new Date(year, dateArr[1] - 1, dateArr[2]);
            showAge.innerHTML = `You are ${
                year - dateArr[0]
            } years old and <br> your next B-Day is in ${Math.floor(
                (nextBday.getTime() - today.getTime()) / 1000
            )} seconds <br> or ${Math.floor(
                (nextBday.getTime() - today.getTime()) / 1000 / 60
            )} minutes <br> or ${Math.floor(
                (nextBday.getTime() - today.getTime()) / 1000 / 60 / 60
            )} hours <br> or ${Math.floor(
                (nextBday.getTime() - today.getTime()) / 1000 / 60 / 60 / 24
            )}days.`;
            // console.log(nextBday);
        }
    }
}
