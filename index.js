const body = document.body;
const left = document.getElementById("leftSide");
const right = document.getElementById("rightSide");

left.addEventListener("mouseenter", () => {
    body.classList.remove("default");
    body.classList.add("mint");
});

right.addEventListener("mouseenter", () => {
    body.classList.remove("mint");
    body.classList.add("default");
});

left.addEventListener("click", () => {
    window.location.href = "Ajeng.html";
});

right.addEventListener("click", () => {
    window.location.href = "Ayya.html";
});