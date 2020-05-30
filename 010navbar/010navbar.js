// get elements from DOM

function init() {
    const bg1 = document.querySelector("#bg1");
    const bg2 = document.querySelector("#bg2");
    const bg3 = document.querySelector("#bg3");
    const bg4 = document.querySelector("#bg4");

    const link1 = document.querySelector(".link1");
    const link2 = document.querySelector(".link2");
    const link3 = document.querySelector(".link3");
    const link4 = document.querySelector(".link4");

    function selectBG(e) {
        if (e.target === bg1) {
            link1.classList.add("link1Active");
            link2.classList.remove("link2Active");
            link3.classList.remove("link3Active");
            link4.classList.remove("link4Active");
        } else if (e.target === bg2) {
            link1.classList.remove("link1Active");
            link2.classList.add("link2Active");
            link3.classList.remove("link3Active");
            link4.classList.remove("link4Active");
        } else if (e.target === bg3) {
            link1.classList.remove("link1Active");
            link2.classList.remove("link2Active");
            link3.classList.add("link3Active");
            link4.classList.remove("link4Active");
        } else if (e.target === bg4) {
            link1.classList.remove("link1Active");
            link2.classList.remove("link2Active");
            link3.classList.remove("link3Active");
            link4.classList.add("link4Active");
        } else {
        }
    }

    window.addEventListener("mouseover", selectBG);
}

window.addEventListener("load", init);
