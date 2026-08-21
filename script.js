let maxGPT = document.querySelector(".max-gpt");
let max = {
    position: {
        x: 0,
        y: 0,
    },
    velocity: {
        x: 1,
        y: 1
    },
    width: 336,
    height: 280
};
let frameCount = 0;

function loop() {
    frameCount++;

    max.position.x += max.velocity.x;
    max.position.y += max.velocity.y;

    // WALL COLLISIONS
    if (
        max.position.x + max.width > window.innerWidth ||
        max.position.x < 0
    ) {
        max.velocity.x *= -1;
        if (max.position.x < 0) max.position.x *= -1;
        if (max.position.x > window.innerWidth - max.width) {
            max.position.x -= 2*(max.position.x+max.width-window.innerWidth);
        }
    }
    if (
        max.position.y + max.height > window.innerHeight ||
        max.position.y < 0
    ) {
        max.velocity.y *= -1;
        if (max.position.y < 0) max.position.y *= -1;
        if (max.position.y > window.innerHeight - max.height) {
            max.position.y -= 2*(max.position.y+max.height-window.innerHeight);
        }
    }

    maxGPT.style.left = max.position.x + "px";
    maxGPT.style.top = max.position.y + "px";

    requestAnimationFrame(loop);
}

maxGPT.addEventListener("click", () => {
    console.log("MaxGPT");
});

requestAnimationFrame(loop);

