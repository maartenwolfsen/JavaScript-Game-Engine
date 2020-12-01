import {FpsCtrl} from "/engine/Renderer/FpsControl.js";

export function Player() {
    const animationCycle = [0, 1, 2, 3];
    const playerSpriteSheet = new Image();
    playerSpriteSheet.src = "/assets/sprite-sheets/player.png";

    let playerData = {
        x: Math.round(config.game.canvas.width / 2),
        y: Math.round(config.game.canvas.height - 100),
        speed: config.game.player.speed,
        width: config.game.player.width,
        height: config.game.player.height,
        animationState: "idle"
    }

    const spriteSheetMapping = {
        "idle": 0,
        "walk_down": 0,
        "walk_right": playerData.width * config.game.sprite_sheets.player_sprite_per_animation,
        "walk_top": playerData.width * (2 * config.game.sprite_sheets.player_sprite_per_animation),
        "walk_left": playerData.width * (3 * config.game.sprite_sheets.player_sprite_per_animation)
    }

    this.getX = function() {
        return playerData.x;
    }

    this.setX = function(x) {
        playerData.x = x;
    }

    this.getY = function() {
        return playerData.y;
    }

    this.setY = function(y) {
        playerData.y = y;
    }

    this.getAnimationState = function() {
        return playerData.animationState;
    }

    this.setAnimationState = function(state) {
        playerData.animationState = state;
    }

    this.getSpeed = function() {
        return playerData.speed;
    }

    this.setSpeed = function(speed) {
        playerData.speed = speed;
    }

    this.drawPlayer = function() {
        playerSpriteSheet.onload = function() {
            let cycleIndex = 1;
            let animationCounter = 0;

            new FpsCtrl(config.fps.global, function() {
                animationCounter++;
                if (animationCounter > config.fps.animation) {
                    cycleIndex = cycleIndex < animationCycle.length ? cycleIndex + 1 : 1;
                    animationCounter = 0;
                }

                game.drawImage(
                    playerSpriteSheet,
                    spriteSheetMapping[playerData.animationState] + (cycleIndex - 1) * playerData.width,
                    0,
                    playerData.width,
                    playerData.height,
                    playerData.x,
                    playerData.y,
                    playerData.width,
                    playerData.height
                );
            }).start();
        };
    }
}
