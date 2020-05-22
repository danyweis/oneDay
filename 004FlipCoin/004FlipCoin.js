// COIN

let coinBTN = document.getElementById("randomCoin");
function flip() {
    coinBTN.classList.toggle("toggled");
    let coin = Math.floor(Math.random() * 2);
    let coinImg = document.getElementById("coin");
    coin === 0
        ? (coinImg.style.backgroundImage = 'url("heads.png")')
        : (coinImg.style.backgroundImage = 'url("tails.png")');
}
function checkKey(e) {
    if (
        e.which === 13 ||
        e.which === 32 ||
        e.keyCode === 13 ||
        e.keyCode === 32
    ) {
        flip();
    }
}

coinBTN.addEventListener("click", flip);
window.addEventListener("keypress", checkKey);
