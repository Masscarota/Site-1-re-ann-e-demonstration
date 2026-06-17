let timer;

function resetTimer() {
    clearTimeout(timer);
    timer = setTimeout(() => {
        window.location.href = "index.html";
    }, 120000);
}

window.addEventListener("mousemove", resetTimer);
window.addEventListener("keydown", resetTimer);
window.addEventListener("click", resetTimer);
window.addEventListener("scroll", resetTimer);

resetTimer();


document.addEventListener("DOMContentLoaded", () => {
    const boutons = document.querySelectorAll(".rep");

    boutons.forEach((bouton) => {
        bouton.addEventListener("click", () => {
            const reponse = bouton.nextElementSibling;

            if (reponse.style.display === "block") {
                reponse.style.display = "none";
                bouton.textContent = "Réponse";
            } else {
                reponse.style.display = "block";
                bouton.textContent = "Masquer";
            }
        });
    });
});