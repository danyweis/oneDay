// get random numbers between 0 and 255
function getRandomNumber() {
    let number = Math.random();
    return Math.floor(number * 256);
}

function assignColor() {
    // assign random color
    let colorValue1 = getRandomNumber();
    let colorValue2 = getRandomNumber();
    let colorValue3 = getRandomNumber();
    // get the background ids
    let value1 = document.getElementById("colorValue1");
    let value2 = document.getElementById("colorValue2");
    let value3 = document.getElementById("colorValue3");
    // get the font ids
    let fontValue1 = document.getElementById("fontValue1");
    let fontValue2 = document.getElementById("fontValue2");
    let fontValue3 = document.getElementById("fontValue3");

    // call function to calculate the font color
    let fonts = fontColor([colorValue1, colorValue2, colorValue3]);

    value1.innerHTML = colorValue1;
    value2.innerHTML = colorValue2;
    value3.innerHTML = colorValue3;

    fontValue1.innerHTML = fonts[0];
    fontValue2.innerHTML = fonts[1];
    fontValue3.innerHTML = fonts[2];
    // style the page
    document.body.style.backgroundColor = `rgb(${colorValue1}, ${colorValue2}, ${colorValue3})`;
    document.body.style.color = `rgb(${fonts[0]}, ${fonts[1]}, ${fonts[2]})`;
}

// assign the font the opposite color value
function fontColor(val) {
    for (let i = 0; i < val.length; i++) {
        if (val[i] <= 128) {
            val[i] += 128;
        } else {
            val[i] -= 128;
        }
    }
    return val;
}

window.addEventListener("click", assignColor);
assignColor();
