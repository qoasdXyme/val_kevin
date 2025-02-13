function moveRandom(elm) {
        elm.style.position = "absolute";
        elm.style.top = Math.floor(Math.random() * 80 + 8) + "%"; 
        elm.style.left = Math.floor(Math.random() * 80 + 8) + "%"; 
    }

    document.addEventListener("DOMContentLoaded", function () {
        const moveRandomPos = document.querySelector("#random");

        moveRandomPos.addEventListener("mouseenter", function (e) {
            moveRandom(e.target);
        });
    });