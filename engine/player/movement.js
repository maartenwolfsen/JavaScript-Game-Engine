import {getPlayer} from "/engine/player/player.js";

let player = getPlayer();

let TOP = false;
let BOTTOM = false;
let LEFT = false;
let RIGHT = false;

document.onkeydown = function(e) {
    if (e.key === config.game.keys.top) TOP = true;
    if (e.key === config.game.keys.bottom) BOTTOM = true;
    if (e.key === config.game.keys.left) LEFT = true;
    if (e.key === config.game.keys.right) RIGHT = true;
}

document.onkeyup = function(e) {
    if (e.key === config.game.keys.top) TOP = false;
    if (e.key === config.game.keys.bottom) BOTTOM = false;
    if (e.key === config.game.keys.left) LEFT = false;
    if (e.key === config.game.keys.right) RIGHT = false;
}

export function move() {
    if (LEFT) {
        player.x -= player.speed;
        player.animationState = "walk_left";
    }

    if (RIGHT) {
        player.x += player.speed;
        player.animationState = "walk_right";
    }

    if (TOP) {
        player.y -= player.speed;
        player.animationState = "walk_top";
    }

    if (BOTTOM) {
        player.y += player.speed;
        player.animationState = "walk_down";
    }
}
