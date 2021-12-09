// ---- Video

var video = document.getElementById("video");
var button = document.getElementById("play-button");

function playVideo() {
        video.play();
        button.style.display = "none";
    } 


// ---- Text

const modal = document.getElementById("klikni");
const invisible = document.getElementById("in");
const table = document.getElementById("table");
const headline = document.getElementById("headline");

modal.addEventListener('click', () => {
    invisible.style.display = "block";
    table.style.opacity = 1;
    headline.style.opacity = 1;
})

