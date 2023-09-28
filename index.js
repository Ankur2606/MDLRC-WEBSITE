const body = document.querySelector('body');

let angle = 0;

function rotate() {
    angle = (angle + 1) % 360;
    body.style.transform = `rotate(${angle}deg)`;
    requestAnimationFrame(rotate);
}

rotate();