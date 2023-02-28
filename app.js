const pacman = document.querySelector("svg.pacman");

pacman.style.top = "0px";
pacman.style.left = "0px";

document.addEventListener("keydown", (event) => {
    switch (event.key) {
    case "ArrowUp":
        moveUp();
        break;
    case "ArrowDown":
        moveDown();
        break;
    case "ArrowLeft":
        moveLeft();
        break;
    case "ArrowRight":
        moveRight();
        break;
    }
});

function moveLeft() {
    pacman.style.left = parseInt(pacman.style.left) - 5 + "px";
}

function moveUp() {
    pacman.style.top = parseInt(pacman.style.top) - 5 + "px";
}

function moveRight() {
    pacman.style.left = parseInt(pacman.style.left) + 5 + "px";
}

function moveDown() {
    pacman.style.top = parseInt(pacman.style.top) + 5 + "px";
}
