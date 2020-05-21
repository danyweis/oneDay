// GET ALL THE VALUES
// THE IDS RGBd
let rgbdValue1 = document.getElementById("rgbValue1");
let rgbdValue2 = document.getElementById("rgbValue2");
let rgbdValue3 = document.getElementById("rgbValue3");
// THE VALUE HTML
let rgbdValue1HTML = rgbdValue1.innerHTML;
let rgbdValue2HTML = rgbdValue2.innerHTML;
let rgbdValue3HTML = rgbdValue3.innerHTML;
// // PUT THE VALUES IN ARRAY
// const rgbd = [rgbdValue1HTML, rgbdValue2HTML, rgbdValue3HTML];
// console.log(rgbd);

//For Later
// // THE IDS BINARY
// let binValue1 = document.getElementById("binValue1");
// let binValue2 = document.getElementById("binValue2");
// let binValue3 = document.getElementById("binValue3");
// // THE VALUE HTML
// let binValue1HTML = binValue1.innerHTML;
// let binValue2HTML = binValue2.innerHTML;
// let binValue3HTML = binValue3.innerHTML;
// // // PUT THE VALUES IN ARRAY
// // const bin = [binValue1HTML, binValue2HTML, binValue3HTML];
// // console.log(bin);

// THE ID OF HEX
let hexValue = document.getElementById("hexValue");
// THE VALUE OF HTML
let hexValueHTML = hexValue.innerHTML;
// // PUT THE VALUE IN AN ARRAY
// let hex = hexValueHTML.split("");
// console.log(hex);

let givenValueArray = [];

let searchedValue = document.getElementById("searchedValue");

function setSearchedValue(e) {
    if (e.type === "keypress") {
        // have to be 13 for enter
        if (e.which === 13 || e.keyCode === 13) {
            localStorage.setItem("search", e.target.innerText);
            searchedValue.blur();
        }
    } else {
        localStorage.setItem("search", e.target.innerText);
        setWorkvalue();
    }
}

function getSearchedValue() {
    if (localStorage.getItem("search") === null) {
        searchedValue.textContent = "#AFE456";
    } else {
        searchedValue.textContent = localStorage.getItem("search");
    }
    setWorkvalue();
}

function setWorkvalue() {
    let val = searchedValue.textContent;

    if (/^\#?[0-9a-f]{3}$/gi.test(val) || /^\#?[0-9a-f]{6}$/gi.test(val)) {
        convertFromHex(val);
    } else if (
        /^(rgb)\(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])+,|\s+([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])+,|\s+([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\)$/i.test(
            val
        )
    ) {
        convertFromRGB(val);
    } else {
        searchedValue.textContent = "Invalid Value";
        console.log("Invalid Value");
    }
    // return searchedValue.textContent;
}
searchedValue.addEventListener("keypress", setSearchedValue);
searchedValue.addEventListener("blur", setSearchedValue);

getSearchedValue();
function convertFromHex(val) {
    let num;
    let theHEX;
    if (/^\#/.test(val)) {
        num = val.slice(1);
    } else {
        num = val;
    }
    if (num.length === 3) {
        let tDig = num.split("");
        num = tDig.map((a) => (a += a));
        theHEX = num.join("");
        num = num.join("");
    } else {
        theHEX = num;
    }
    num = theHEX.split("");
    for (let i = 0; i < num.length; i++) {
        if (num[i] < 10) {
            num[i] = Number(num[i]);
        } else if (num[i].toUpperCase() == "A") {
            num[i] = 10;
        } else if (num[i].toUpperCase() == "B") {
            num[i] = 11;
        } else if (num[i].toUpperCase() == "C") {
            num[i] = 12;
        } else if (num[i].toUpperCase() == "D") {
            num[i] = 13;
        } else if (num[i].toUpperCase() == "E") {
            num[i] = 14;
        } else {
            num[i] = 15;
        }
    }
    let rgb1 = 16 * num[0] + num[1];
    let rgb2 = 16 * num[2] + num[3];
    let rgb3 = 16 * num[4] + num[5];
    let theRGB = `rgb(${rgb1},${rgb2},${rgb3})`;

    console.log(num);

    setPageStyle(theRGB);
    rgbdValue1.innerHTML = rgb1;
    rgbdValue2.innerHTML = rgb2;
    rgbdValue3.innerHTML = rgb3;
    hexValue.innerHTML = `#${theHEX}`;
}

// calculate the hex value
function convertFromRGB(val) {
    let theNum = val.slice(4, val.length - 1).split(/,|\s/);
    let divid = 0;
    let multi = 0;
    let theHex = "#";
    for (let n = 0; n < 3; n++) {
        divid = theNum[n] / 16;
        let dividFull = Math.floor(divid);

        multi = divid - dividFull;
        multi *= 16;

        if (dividFull < 10) {
            theHex += dividFull;
        } else if (dividFull == 10) {
            theHex += "A";
        } else if (dividFull == 11) {
            theHex += "B";
        } else if (dividFull == 12) {
            theHex += "C";
        } else if (dividFull == 13) {
            theHex += "D";
        } else if (dividFull == 14) {
            theHex += "E";
        } else {
            theHex += "F";
        }

        if (multi < 10) {
            theHex += multi;
        } else if (multi == 10) {
            theHex += "A";
        } else if (multi == 11) {
            theHex += "B";
        } else if (multi == 12) {
            theHex += "C";
        } else if (multi == 13) {
            theHex += "D";
        } else if (multi == 14) {
            theHex += "E";
        } else {
            theHex += "F";
        }
    }
    console.log(theHex);
    setPageStyle(theHex);
    hexValue.innerHTML = theHex;
}

// SET THE STYLE OF THE PAGE
function setPageStyle(theColor) {
    document.getElementById(
        "resultValueWhite1"
    ).innerHTML = `Color ${theColor} on white Background `;
    document.getElementById(
        "resultValueWhite2"
    ).innerHTML = `Color ${theColor} on white Background `;
    document.getElementById(
        "resultValueWhite3"
    ).innerHTML = `Color ${theColor} on white Background `;
    document.getElementById(
        "resultValueBlack1"
    ).innerHTML = `Color ${theColor} on white Background `;
    document.getElementById(
        "resultValueBlack2"
    ).innerHTML = `Color ${theColor} on white Background `;
    document.getElementById(
        "resultValueBlack3"
    ).innerHTML = `Color ${theColor} on white Background `;

    document.getElementById(
        "resultValueWhite1"
    ).style.backgroundColor = theColor;
    document.getElementById(
        "resultValueBlack1"
    ).style.backgroundColor = theColor;
    document.getElementById(
        "resultValueWhite2"
    ).style.border = `solid ${theColor} 1px`;
    document.getElementById(
        "resultValueBlack2"
    ).style.border = `solid ${theColor} 1px`;
    document.getElementById("resultValueWhite3").style.color = theColor;
    document.getElementById("resultValueBlack3").style.color = theColor;
    document.getElementById("convert").style.backgroundColor = theColor;
}
