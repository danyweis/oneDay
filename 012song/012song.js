let lyrics = document.querySelector(".lyrics");
let button = document.querySelector("#button");

button.addEventListener("click", getData);
let artistName;
let songName;
function getData() {
    let artist = document.querySelector("#artist");
    let song = document.querySelector("#song");
    artistName = artist.value;
    songName = song.value;
    if (!artistName || !songName) {
        lyrics.innerHTML = "Artist and Song must be filled out!";
    } else {
        let url = `https://api.lyrics.ovh/v1/${artistName}/${songName}`;
        fetch(url)
            .then((response) => response.json())
            .then((data) => printSong(data))
            .catch((error) => console.log(error));
    }
}

// let url = `https://api.lyrics.ovh/v1/${artistName}/${songName}`;
function printSong(data) {
    let song = data.lyrics;
    if (song == undefined) {
        document.querySelector(".artistName").innerHTML = "";
        document.querySelector(".songName").innerHTML = "";
        lyrics.innerHTML = "Oupssss.... Something went wrong maybe look if everything is spelled correctly";
    } else {
        document.querySelector(".artistName").innerHTML = artistName.toUpperCase();
        document.querySelector(".songName").innerHTML = songName.toUpperCase();
        lyrics.innerHTML = song;
    }
}
