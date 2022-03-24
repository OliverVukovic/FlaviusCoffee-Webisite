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

let isClicked = false;
modal.addEventListener('click', () => {
    if(!isClicked){
    invisible.style.display = "block";
    table.style.opacity = 1;
    headline.style.opacity = 1;
    isClicked = true;
} else {
    invisible.style.display = "none";
    table.style.opacity = 0.5;
    headline.style.opacity = 0.5;
    isClicked = false;
}
})



// openModal = () => {
//     var con = document.getElementById("in");
//     con.classList.toggle("hidden");
// }

// .hidden {
//   display: none;
// }
//     <table onclick="openModal()">Toggle
//     <span id="in" class="hidden">Some text here</span>
//     </table>
