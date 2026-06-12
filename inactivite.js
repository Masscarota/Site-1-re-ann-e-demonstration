let timer;

function resetTimer() {
    clearTimeout(timer);
    timer = setTimeout(() => {
        window.location.href = "index.html";
    }, 60000);
}

window.addEventListener("mousemove", resetTimer);
window.addEventListener("keydown", resetTimer);
window.addEventListener("click", resetTimer);
window.addEventListener("scroll", resetTimer);

resetTimer();


document.addEventListener("DOMContentLoaded", () => {
    const bouton = document.querySelector(".rep");
    const reponse = document.querySelector(".reponse");

    bouton.addEventListener("click", () => {
        if (reponse.style.display === "block") {
            reponse.style.display = "none";
            bouton.textContent = "Réponse";
        } else {
            reponse.style.display = "block";
            bouton.textContent = "Masquer";
        }
    });
});