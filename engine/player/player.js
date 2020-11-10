let player = {
    x: canvas.width / 2,
    y: canvas.height - 100,
    speed: 1,
    width: 64,
    height: 64
};

const animationCycle = [0, 1, 2, 3];
const fps = 60;                         // Global FPS Setting
const animationFps = 15;                // Animation FPS

let playerSpriteSheet = new Image();
playerSpriteSheet.src = "assets/sprite-sheets/player.png";
playerSpriteSheet.onload = function() {
    drawPlayer();
};

let cycleIndex = 1;
let animationCounter = 0;

function drawFrame(frameX, frameY, canvasX, canvasY) {
    game.drawImage(
        playerSpriteSheet,
        frameX * player.width,
        frameY * player.height,
        player.width,
        player.height,
        canvasX,
        canvasY,
        player.width,
        player.height
    );
}

function drawPlayer() {
    fc.start();
}

const fc = new FpsCtrl(fps, function() {
    animationCounter++;
    if (animationCounter > animationFps) {
        cycleIndex = cycleIndex < animationCycle.length ? cycleIndex + 1 : 1;
        animationCounter = 0;
    }

    drawFrame(animationCycle[cycleIndex - 1], 0, player.x, player.y);
});
