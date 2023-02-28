const pacman = document.querySelector("svg.pacman");

pacman.addEventListener("keydown", (event) => {
    switch (event.key) {
    case "ArrowUp":
        pacman.style.top = pacman.style.top - 1;
        break;
    }
});
