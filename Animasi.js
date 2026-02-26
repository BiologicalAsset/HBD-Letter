const container = document.querySelector(".container");
const letter = document.getElementById("letter");
const music = document.getElementById("bgm");
const gifLeft = document.getElementById("gifLeft");
const gifRight = document.getElementById("gifRight");

container.addEventListener("click", function() {
    container.classList.add("open");
    letter.classList.add("open-letter");

    music.currentTime = 0;
    music.play();

    gifLeft.classList.add("show-gif");
    gifRight.classList.add("show-gif");
});

letter.addEventListener("click", function() {
    container.classList.remove("open");
    letter.classList.remove("open-letter");

    music.pause();
    music.currentTime = 0;

    gifLeft.classList.remove("show-gif");
    gifRight.classList.remove("show-gif");
});