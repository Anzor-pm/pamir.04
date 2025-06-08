
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let car = { x: canvas.width/2, y: canvas.height-100, speed: 2, auto: false };
let keys = {};

window.addEventListener("keydown", e => {
    keys[e.key] = true;
    if (e.key === 'a') car.auto = !car.auto;
});

window.addEventListener("keyup", e => {
    keys[e.key] = false;
});

function update() {
    if (!car.auto) {
        if (keys['ArrowLeft']) car.x -= 5;
        if (keys['ArrowRight']) car.x += 5;
    } else {
        car.x += Math.sin(Date.now()/500) * 2;
    }
}

function draw() {
    ctx.fillStyle = "#aee1f9";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "black";
    ctx.fillRect(car.x - 25, car.y - 50, 50, 100);
}

function loop() {
    update();
    draw();
    requestAnimationFrame(loop);
}

loop();
