const start = document.getElementById("start");
const video = document.getElementById("jumpscare");

start.addEventListener("click", () => {

    start.style.display = "none";

    video.style.display = "block";

    video.play();
});

video.addEventListener("ended", () => {

    setTimeout(() => {
        window.location.href = "accueil.html";
    }, 500);

});