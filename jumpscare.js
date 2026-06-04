const start = document.getElementById("start");
const video = document.getElementById("jumpscare");

start.addEventListener("click", () => {

    start.style.display = "none";

    video.style.display = "block";

    video.play();
});

video.addEventListener("ended", () => {

    video.classList.add("fade-out");

    setTimeout(() => {
        window.location.href = "page2.html";
    }, 1000);

});