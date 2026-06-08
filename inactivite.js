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