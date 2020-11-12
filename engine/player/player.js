let spriteSettings = {
    "sprites_per_animation": config.game.sprite_sheets.player_sprite_per_animation
}

let player = {
    x: config.game.canvas.width / 2,
    y: config.game.canvas.height - 100,
    speed: config.game.player.speed,
    width: config.game.player.width,
    height: config.game.player.height,
    animationState: "idle"
};

const spriteSheetMapping = {
    "idle": 0,
    "walk_down": 0,
    "walk_right": player.width * spriteSettings.sprites_per_animation,
    "walk_top": player.width * (2 * spriteSettings.sprites_per_animation),
    "walk_left": player.width * (3 * spriteSettings.sprites_per_animation)
};

const animationCycle = [0, 1, 2, 3];

let playerSpriteSheet = new Image();
playerSpriteSheet.src = "assets/sprite-sheets/player.png";
playerSpriteSheet.onload = function() {
    drawPlayer();
};

let cycleIndex = 1;
let animationCounter = 0;

const fc = new FpsCtrl(config.fps.global, function() {
    animationCounter++;

    if (animationCounter > config.fps.animation) {
        cycleIndex = cycleIndex < animationCycle.length ? cycleIndex + 1 : 1;
        animationCounter = 0;
    }

    drawFrame(cycleIndex - 1, 0, player.x, player.y);
});

function drawFrame(frameX, frameY, canvasX, canvasY) {
    game.drawImage(
        playerSpriteSheet,
        spriteSheetMapping[player.animationState] + frameX * player.width,
        frameY * player.height,
        player.width,
        player.height,
        canvasX,
        canvasY,
        player.width,
        player.height
    );
}

export function drawPlayer() {
    fc.start();
}

export function getPlayer() {
    return player;
}
