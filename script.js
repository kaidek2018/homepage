console.log("Cześć! Jestem tu nowa.");

let przycisk = document.querySelector(".przycisk");
przycisk.addEventListener("click", () => {
    zdjecie = document.querySelector(".zdjecie");
    zdjecie.remove();
});